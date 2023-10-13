const express = require("express");
const { foodimageValidation } = require("../validations");
const { foodimageController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create foodimage */
router.post(
  "/create-foodimage",
  validate(foodimageValidation.createFoodimage),
  foodimageController.createFoodimage
);
/** Get foodimage list */
router.get(
  "/list",
  foodimageController.getFoodimageList
);

/** Get foodimage details by id */
router.get(
  "/get-details/:foodimageId",
  foodimageController.getFoodimageDetails
);

/** foodimage details update by id */
router.put(
  "/update-details/:foodimageId",
  validate(foodimageValidation.createFoodimage),
  foodimageController.updateDetails
);

/** Delete foodimage */
router.delete(
  "/delete-foodimage/:foodimageId",
  foodimageController.deleteFoodimage
);

module.exports = router;
