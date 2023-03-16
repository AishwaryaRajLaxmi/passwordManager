const express = require("express");
const categoryRouter = express.Router();
const { validateUserToken } = require("../middlewares/jwtAuthentication");
const joiSchemaValidation = require("../middlewares/joiSchemaValidation");
const {
  createCategorySchema,
  updateCategorySchema,
  getAllCategorySchema,
} = require("../joiValidationSchema/categoryValidationSchema");
const categoryController = require("../Controllers/categoryController");

// createCategory
categoryRouter.post(
  "/",
  joiSchemaValidation.validate(createCategorySchema),
  categoryController.createCategory
);

// deleteCategory
categoryRouter.delete(
  "/:_id",
  validateUserToken,
  categoryController.deleteCategory
);

// getCategoryById
categoryRouter.get(
  "/:_id",
  validateUserToken,
  categoryController.getCategoryById
);

// getAllCategory
categoryRouter.get(
  "/",
  validateUserToken,
  joiSchemaValidation.validate(getAllCategorySchema, "query"),
  categoryController.getAllCategory
);


// // updateUser
// userRouter.put(
//   "/",
//   validateUserToken,
//   joiSchemaValidation.validate(updateCategorySchema),
//   categoryController.updateUser
// );

module.exports = categoryRouter;
