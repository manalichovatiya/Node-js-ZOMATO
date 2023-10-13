const express = require("express");
const { paymentValidation } = require("../validations");
const { paymentController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create payment */
router.post(
  "/create-payment",
  validate(paymentValidation.createPayment),
  paymentController.createPayment
);
/** Get payment list */
router.get(
  "/list",
  paymentController.getPaymentList
);

/** Get payment details by id */
router.get(
  "/get-details/:paymentId",
  paymentController.getPaymentDetails
);

/** payment details update by id */
router.put(
  "/update-details/:paymentId",
  validate(paymentValidation.createPayment),
  paymentController.updateDetails
);

/** Delete payment */
router.delete(
  "/delete-payment/:paymentId",
  paymentController.deletePayment
);

module.exports = router;
