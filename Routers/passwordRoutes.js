const express = require("express");
const passwordRouter = express.Router();
const { validateUserToken } = require("../middlewares/jwtAuthentication");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const {
  createPasswordSchema,
  updatePassword,
  getAllPassword,
  objectIdSchema,
} = require("../joiValidationSchema/passwordValidationSchema");
const passwordController = require("../Controllers/passwordController");

// createPassword
passwordRouter.post(
  "/",
  validateUserToken,
  joiSchemaValidation.validate(createPasswordSchema),
  passwordController.createPassword
);

// getAllPassword
passwordRouter.get(
  "/",
  validateUserToken,
  joiSchemaValidation.validate(getAllPassword, "query"),
  passwordController.getAllPassword
);

// getPasswordByCategory
passwordRouter.get(
  "/allPasswords",
  validateUserToken,
  passwordController.getPasswordByCategory
);
// deletePassword
passwordRouter.delete(
  "/:_id",
  validateUserToken,
  joiSchemaValidation.validate(objectIdSchema, "params"),

  passwordController.deletePassword
);

// updatePassword
passwordRouter.put(
  "/:_id",
  validateUserToken,
  joiSchemaValidation.validate(updatePassword),
  passwordController.updatePassword
);

// getPasswordById
passwordRouter.get(
  "/:_id",
  validateUserToken,
  passwordController.getPasswordById
);

module.exports = passwordRouter;
