const express = require("express");
const userRouter = express.Router();
const { validateUserToken } = require("../middlewares/jwtAuthentication");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const {
  registerUserSchema,
  loginUserSchema,
  updateUserSchema,
} = require("../joiValidationSchema/userValidationSchema");
const userController = require("../Controllers/userController");

// register the user
userRouter.post(
  "/",
  joiSchemaValidation.validate(registerUserSchema),
  userController.registerUser
);

// loginUser
userRouter.get(
  "/",
  joiSchemaValidation.validate(loginUserSchema, "body"),
  userController.loginUser
);

// deleteUser

userRouter.delete("/", validateUserToken, userController.deleteUser);

// updateUser
userRouter.put(
  "/",
  validateUserToken,
  joiSchemaValidation.validate(updateUserSchema),
  userController.updateUser
);


module.exports = userRouter;
