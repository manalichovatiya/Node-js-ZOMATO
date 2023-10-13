const Joi = require("joi");

/** create payment */
const createPayment = {
  body: Joi.object().keys({
    payment_method: Joi.string().required().trim(),
    Users: Joi.string().required().trim(),
    Menu: Joi.string().required().trim(),
  }),
};

module.exports = {
    createPayment,
}