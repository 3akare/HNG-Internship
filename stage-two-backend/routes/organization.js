const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const organizationController = require("../controllers/organizationController");

router.get("/", auth, organizationController.getOrganizations);

module.exports = router;