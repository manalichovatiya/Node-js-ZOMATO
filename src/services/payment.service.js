const { Payment } = require("../models");

// Create payment
const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
};

// Get payment list
const getPaymentList = async () => {
  return Payment.find();
};

// Get payment details by id
const getPaymentById = async (paymentId) => {
  return Payment.findById(paymentId);
};

// payment details update by id
const updateDetails = async (paymentId, reqBody) => {
  return Payment.findByIdAndUpdate(paymentId, { $set: reqBody });
};

// Delete payment
const deletePayment = async (paymentId) => {
  return Payment.findByIdAndDelete(paymentId);
};

module.exports = {
  createPayment,
  getPaymentList,
  getPaymentById,
  updateDetails,
  deletePayment,
};