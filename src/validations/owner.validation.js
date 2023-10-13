const Joi = require("joi");

/** create owner */
const createOwner = {
  body: Joi.object().keys({
    owner_name: Joi.string().required().trim(),
    mobile_no: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
  }),
};

module.exports = {
    createOwner,
}