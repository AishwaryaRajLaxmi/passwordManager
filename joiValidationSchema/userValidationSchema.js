const joi = require("joi");

// registerUserSchema
module.exports.registerUserSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(6).required(),
});

// loginUserSchema
module.exports.loginUserSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

// updateUserSchema
module.exports.updateUserSchema = joi.object({
  name: joi.string(),
  email: joi.string().email(),
  password: joi.string().min(6).max(6),
});
