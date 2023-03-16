const categoryService = require("../services/categoryServices");
const constants = require("../helpers/constansts");

// createCategory

module.exports.createCategory = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await categoryService.createCategory(req.body);
    response.body = serviceResponse;
    response.message = constants.CategoryMessage.CATEGORY_CREATED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong controller : categoryController :createCategory\nError: ${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// deleteCategory
module.exports.deleteCategory = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await categoryService.deleteCategory(
      req.params._id
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.CategoryMessage.CATEGORY_DELETED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :categoryControlelr : deleteCategory`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// getAllCategory
module.exports.getAllCategory = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await categoryService.getAllCategory(req.query);
    response.body = serviceResponse;
    response.message = constants.CategoryMessage.CATEGORY_FETCHED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong : controller : categoryController : getAllCategory\n Error:${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};
// // updateUser
// module.exports.updateUser = async (req, res) => {
//   const response = { ...constants.defaultServerResponse };

//   try {
//     const serviceResponse = await userService.updateUser(
//       req.params.userId,
//       req.body
//     );
//     response.body = serviceResponse;
//     console.log("rb", response.body);
//     response.status = 200;
//     response.message = constants.UserMessage.USER_UPDATED;
//   } catch (error) {
//     console.log(
//       `Something went wrong : controller :userController : update : updateUser`
//     );
//     response.message = error.message;
//     response.error = error;
//   }
//   res.status(response.status).send(response);
// };

// getCategoryById
module.exports.getCategoryById = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await categoryService.getCategoryById(
      req.params._id
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.CategoryMessage.CATEGORY_FETCHED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :categoryController : getCategoryById`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};


