const Joi = require("joi");

/** create user */
const createUser = {
  body: Joi.object().keys({
    full_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    phone_number: Joi.number().required(),
  }),
};

// Send mail
const sendMail = {
  body: Joi.object({
    full_name: Joi.string().required().trim(),
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
  }),
}

module.exports = {
    createUser,
    sendMail
}