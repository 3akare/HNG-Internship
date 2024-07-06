
const jwt = require("jsonwebtoken")
const { User, Organization, UserOrganization } = require("../models/index");
require("dotenv").config();

exports.getOrganizations = async (req, res) => {
    const userId = req.user.userId;

    const user = await User.findOne({ where: { userId } });

    if (!user) return res.status(404).json({ message: "User not found" });

    const orgIds = await UserOrganization.findAll({
        where: { userId: user.id.toString() }, // Ensure the userId is correctly formatted as a string if necessary
        attributes: ['orgId'] // Select only the 'orgId' column
    });
    const orgIdValues = orgIds.map(entry => entry.orgId);
    const organizations = await Organization.findAll({
        where: {
            id: orgIdValues
        }
    });
    return res.status(200).json({
        status: 'success',
        message: 'Organisations retrieved successfully',
        data: {
            organizations: organizations
        }
    });
};

exports.getOrganization = async (req, res) => {
    const orgId = req.params.orgId

    const organization = await Organization.findOne({ where: { orgId } })

    if (!organization) return res.status(404).json({ message: "Organization not found" });

    res.status(200).json({
        status: "success",
        message: "Organization retrieved successfully",
        data: organization
    })
}

exports.createOrganization = async (req, res) => {
    const { name, description } = req.body;

    if (!name) return res.status(422).json({ errors: [{ field: "name", message: "Name is required" }] });

    const orgId = `${name}-${Date.now()}`;
    const organization = await Organization.create({ orgId, name, description });

    const user = await User.findOne({ where: { userId: req.user.userId } });
    await user.addOrganization(organization);

    res.status(201).json({
        status: 'success',
        message: 'Organisation created successfully',
        data: organization
    })

}

exports.addUserToOrganization = async (req, res) => {
    const { userId } = req.user;

    const organization = await Organization.findOne({ where: { orgId: req.params.orgId } })
    if (!organization) return res.status(404).json({ message: "Organization not found" });

    const user = await User.findOne({ where: { userId } })
    if (!user) return res.status(404).json({message: "User not found"});

    await organization.addUser(user);

    res.status(200).json({
        status: "success",
        message: "User added to organization successfully"
    })
}