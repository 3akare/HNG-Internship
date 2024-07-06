const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const organizationController = require("../controllers/organizationController");

router.get("/", auth, organizationController.getOrganizations);
router.get("/:orgId", auth,organizationController.getOrganization )
router.post("/", auth, organizationController.createOrganization);
router.post("/:orgId/users", auth, organizationController.addUserToOrganization)

module.exports = router;