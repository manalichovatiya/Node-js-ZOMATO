const Joi = require("joi");

/** create foodimage */
const createFoodimage = {
  body: Joi.object().keys({
    food_image: Joi.string().required().trim(),
    image_dec: Joi.string().required().trim(),
    food_price: Joi.string().required().trim(),
  }),
};

module.exports = {
    createFoodimage,
}