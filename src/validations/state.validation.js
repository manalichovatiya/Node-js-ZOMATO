const Joi = require("joi");

/** create state */
const createState = {
  body: Joi.object().keys({
    state_name: Joi.string().required().trim(),
    Contry: Joi.string().required().trim(),
  }),
};

module.exports = {
    createState,
}