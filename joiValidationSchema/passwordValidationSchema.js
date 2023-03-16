const mongoose = require("mongoose");
const joi = require("joi");
const {
  Types: {
    ObjectId: { isValid },
  },
} = require("mongoose");

// createPasswordSchema
module.exports.createPasswordSchema = joi.object({
  title: joi.string().required(),
  userName: joi.string(),
  password: joi.string().required(),
  notes: joi.string(),
  category: joi.custom((value, helper) => {
    if (!isValid(value)) return helper.message("ObjectId is not valid");
  }),
});

// updatePassword
module.exports.updatePassword = joi.object({
  title: joi.string(),
  userName: joi.string(),
  password: joi.string(),
  notes: joi.string(),
});

// getAllPassword;
module.exports.getAllPassword = joi.object({
  skip: joi.number(),
  limit: joi.number(),
});


//objectIdSchema
module.exports.objectIdSchema=joi.object({
    _id:joi.custom((value,helper)=>{
        if(!isValid(value))
        return helper.message("Objectid is not valid");
    }).required(),
})