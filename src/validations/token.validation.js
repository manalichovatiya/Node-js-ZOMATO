const Joi = require("joi");

/** Create token  */
const createToken = {
  body: Joi.object({
    Users: Joi.string().required().trim(),
  }),
};

module.exports = {
    createToken,
};
