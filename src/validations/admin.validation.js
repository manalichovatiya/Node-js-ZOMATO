const Joi = require("joi");

/** create admin */
const createAdmin = {
  body: Joi.object().keys({
    Owner: Joi.string().required().trim(),
    Restaurant: Joi.string().required().trim(),
  }),
};

module.exports = {
    createAdmin,
}