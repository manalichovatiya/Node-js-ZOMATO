const Joi = require("joi");

/** create menu */
const createMenu = {
  body: Joi.object().keys({
    food_name: Joi.string().required().trim(),
    drink_name: Joi.string().required().trim(),
    food_Image: Joi.string().required().trim(),
  }),
};

module.exports = {
    createMenu,
}