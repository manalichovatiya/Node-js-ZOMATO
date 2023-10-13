const express = require("express");
const { cityValidation } = require("../validations");
const { cityController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create city */
router.post(
  "/create-city",
  validate(cityValidation.createCity),
  cityController.createCity
);
/** Get city list */
router.get(
  "/list",
  cityController.getCityList
);

/** Get city details by id */
router.get(
  "/get-details/:cityId",
  cityController.getCityDetails
);

/** city details update by id */
router.put(
  "/update-details/:cityId",
  validate(cityValidation.createCity),
  cityController.updateDetails
);

/** Delete city */
router.delete(
  "/delete-city/:cityId",
  cityController.deleteCity
);

module.exports = router;
