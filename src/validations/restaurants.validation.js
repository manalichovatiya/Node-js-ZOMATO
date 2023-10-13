const Joi = require("joi");

/** create restaurant */
const createRestaurant = {
  body: Joi.object().keys({
    restaurant_name: Joi.string().required().trim(),
    Owner: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    contact_no: Joi.number().required(),
    whatapp_notifaction: Joi.string().required().trim(),
    restaurant_open_time: Joi.string().required().trim(),
    restaurant_type: Joi.string().required().trim(),
    RestImage: Joi.string().required().trim(),
    FoodImage: Joi.string().required().trim(),
  }),
};

module.exports = {
    createRestaurant,
}