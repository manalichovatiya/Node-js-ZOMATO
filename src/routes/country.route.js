const express = require("express");
const { countryValidation } = require("../validations");
const { countryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create country */
router.post(
  "/create-country",
  validate(countryValidation.createCountry),
  countryController.createCountry
);

/** Get country list */
router.get(
  "/list",
  countryController.getCountryList
);

/** Get country details by id */
router.get(
  "/get-details/:countryId",
  countryController.getCountryDetails
);

/** country details update by id */
router.put(
  "/update-details/:countryId",
  validate(countryValidation.createCountry),
  countryController.updateDetails
);

/** Delete country */
router.delete(
  "/delete-country/:countryId",
  countryController.deleteCountry
);

module.exports = router;
