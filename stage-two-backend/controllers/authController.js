const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, Organization } = require("../models/index");
require("dotenv").config();

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(422).json({
        errors: [{ field: "all", message: "All fields are required" }],
      });
    }

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(422).json({
        errors: [{ field: "email", message: "Email already exists" }],
      });
    }

    const userId = `${firstName}-${Date.now()}`;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      userId,
      firstName,
      lastName,
      email,
      password: hashedpassword,
      phone,
    });

    const orgId = `${firstName}-org-${Date.now()}`;
    const organization = await Organization.create({
      orgId,
      name: `${firstName}'s Organization`,
    });

    await user.addOrganization(organization);

    const token = jwt.sign(
      { userId: user.userId, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      status: "success",
      message: "Registration successful",
      data: {
        accessToken: token,
        user: {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "Bad request",
      message: "Registration unsuccessful",
      statusCode: 400,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      status: "Bad request",
      message: "Authentication failed",
      statusCode: 401,
    });
  }

  const user = await User.findOne({ where: { email } });

  if (!user || !bcrypt.compare(password, user.password)) {
    return res.status(401).json({
      status: "Bad request",
      message: "Authentication failed",
      statusCode: 401,
    });
  }

  const token = jwt.sign(
    { userId: user.userId, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    status: "success",
    message: "Login successful",
    data: {
      accessToken: token,
      user: {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    },
  });
};
