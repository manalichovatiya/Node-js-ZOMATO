const express = require("express");
const { menuValidation } = require("../../validations");
const { menuController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/** create menu */
router.post(
  "/create-menu",
  upload.array("food_image",4),
  validate(menuValidation.createMenu),
  menuController.createMenu
);

/** Get menu list */
router.get(
  "/list",
  menuController.getMenuList
);

/** Get menu details by id */
router.get(
  "/get-details/:menuId",
  menuController.getMenuDetails
);

/** menu details update by id */
router.put(
  "/update-details/:menuId",
  validate(menuValidation.createMenu),
  menuController.updateDetails
);

/** Delete menu */
router.delete(
  "/delete-menu/:menuId",
  menuController.deleteMenu
);

module.exports = router;
