const express = require("express");
const { ownerValidation } = require("../../validations");
const { ownerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create owner */
router.post(
  "/create-owner",
  validate(ownerValidation.createOwner),
  ownerController.createOwner
);

/** Get owner list */
router.get(
  "/list",
  ownerController.getOwnerList
);

/** Get owner details by id */
router.get(
  "/get-details/:ownerId",
  ownerController.getOwnerDetails
);

/** owner details update by id */
router.put(
  "/update-details/:ownerId",
  validate(ownerValidation.createOwner),
  ownerController.updateDetails
);

/** Delete owner */
router.delete(
  "/delete-owner/:ownerId",
  ownerController.deleteOwner
);

module.exports = router;
