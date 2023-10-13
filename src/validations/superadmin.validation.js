const Joi = require("joi");

/** create superadmin */
const createSuperadmin = {
  body: Joi.object().keys({
    Admin: Joi.string().required().trim(),
  }),
};

module.exports = {
    createSuperadmin,
}