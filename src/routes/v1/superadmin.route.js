const express = require("express");
const { superadminValidation } = require("../../validations");
const { superadminController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create superadmin */
router.post(
  "/create-superadmin",
  validate(superadminValidation.createSuperadmin),
  superadminController.createSuperadmin
);

/** Get superadmin list */
router.get(
  "/list",
  superadminController.getSuperadminList
);

/** Get superadmin details by id */
router.get(
  "/get-details/:superadminId",
  superadminController.getSuperadminDetails
);

/** superadmin details update by id */
router.put(
  "/update-details/:superadminId",
  validate(superadminValidation.createSuperadmin),
  superadminController.updateDetails
);

/** Delete superadmin */
router.delete(
  "/delete-superadmin/:superadminId",
  superadminController.deleteSuperadmin
);

module.exports = router;
