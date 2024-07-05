
const jwt = require("jsonwebtoken")
const { User, Organization, UserOrganization } = require("../models/index");
require("dotenv").config();

exports.getOrganizations = async (req, res) => {
    const userId = req.user.userId;
    const user = await User.findOne({ where: { userId } });
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
            organisations: organizations
        }
    });
};