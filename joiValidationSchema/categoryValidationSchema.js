const joi = require("joi");

// createCategorySchema
module.exports.createCategorySchema = joi.object({
  label: joi.string().required(),
  description: joi.string(),
});

// updateCategorySchema
module.exports.updateCategorySchema = joi.object({
  label: joi.string().required(),
  description: joi.string(),
});

// getAllCategorySchema;
module.exports.getAllCategorySchema = joi.object({
  skip: joi.number(),
  limit: joi.number(),
});
