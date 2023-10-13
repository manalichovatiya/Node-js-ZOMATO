const Joi = require("joi");

/** create restimage */
const createRestimage = {
  body: Joi.object().keys({
    rest_image: Joi.string().required().trim(),
    image_dec: Joi.string().required().trim(),
    rest_add: Joi.string().required().trim(),
  }),
};

module.exports = {
    createRestimage,
}