const express = require("express");
const { resimageValidation } = require("../validations");
const { restimageController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create restimage */
router.post(
  "/create-restimage",
  validate(resimageValidation.createRestimage),
  restimageController.createRestimage
);
/** Get restimage list */
router.get(
  "/list",
  restimageController.getRestimageList
);

/** Get restimage details by id */
router.get(
  "/get-details/:restimageId",
  restimageController.getRestimageDetails
);

/** restimage details update by id */
router.put(
  "/update-details/:restimageId",
  validate(resimageValidation.createRestimage),
  restimageController.updateDetails
);

/** Delete restimage */
router.delete(
  "/delete-restimage/:restimageId",
  restimageController.deleteRestimage
);

module.exports = router;
