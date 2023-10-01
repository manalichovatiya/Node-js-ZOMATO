const Joi = require("joi");

/** create user */
const createUser = {
  body: Joi.object().keys({
    full_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    phone_number: Joi.number().required(),
  }),
};
const sendMail = {
  body : Joi.object().keys({
    email : Joi.string().required().trim(),
    subject : Joi.string().required().trim(),
    text : Joi.string().required().trim(),
  })
}

module.exports = {
    createUser,
    sendMail
}