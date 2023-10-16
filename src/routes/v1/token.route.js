const express = require("express");
const { tokenValidation } = require("../../validations");
const { tokenController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create token*/
router.post(
  "/create-token",
  validate(tokenValidation.createToken),
  tokenController.createToken
);

/** Verify token*/
router.get(
    "/verify-token",
    auth(),
    tokenController.verifyToken
);

module.exports = router;