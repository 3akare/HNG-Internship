const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { User } = require("../models");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { userId: id } });

    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
        statusCode: 404,
      });
    }

    return res.status(200).json({
      status: "success",
      message: "User found",
      data: {
        userId: user.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "Bad Request",
      message: "Client error",
      statusCode: 400,
    });
  }
};

router.get("/:id", auth, getUser);

module.exports = router;
