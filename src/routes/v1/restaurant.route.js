const express = require("express");
const { restaurantsValidation } = require("../../validations");
const { restaurantController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/** create restaurant */
router.post(
  "/create-restaurant",
  upload.array("restaurant_image",1),
  validate(restaurantsValidation.createRestaurant),
  restaurantController.createRestaurant
);

/** Get restaurant list */
router.get(
  "/list",
  restaurantController.getRestaurantList
);

/** Get restaurant details by id */
router.get(
  "/get-details/:restaurantId",
  restaurantController.getRestaurantDetails
);

/** Get restaurant details by city id */
router.get(
  "/restaurant-by-city/:cityId",
  restaurantController.getRestaurantBycity
);

/** restaurant details update by id */
router.put(
  "/update-details/:restaurantId",
  validate(restaurantsValidation.createRestaurant),
  restaurantController.updateDetails
);

/** update restaurant status*/
router.put(
  "/update-restaurant-status/:restaurantId",
  restaurantController.updateDetails
);

/** Delete restaurant */
router.delete(
  "/delete-restaurant/:restaurantId",
  restaurantController.deleteRestaurant
);

module.exports = router;
