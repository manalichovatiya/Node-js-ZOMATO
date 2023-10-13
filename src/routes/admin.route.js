const express = require("express");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create admin */
router.post(
  "/create-admin",
  validate(adminValidation.createAdmin),
  adminController.createAdmin
);
/** Get admin list */
router.get(
  "/list",
  adminController.getAdminList
);

/** Get admin details by id */
router.get(
  "/get-details/:adminId",
  adminController.getAdminDetails
);

/** admin details update by id */
router.put(
  "/update-details/:adminId",
  validate(adminValidation.createAdmin),
  adminController.updateDetails
);

/** Delete admin */
router.delete(
  "/delete-admin/:adminId",
  adminController.deleteAdmin
);

module.exports = router;
