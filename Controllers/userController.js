const userService = require("../services/userServices");
const constants = require("../helpers/constansts");

// registerUser

module.exports.registerUser = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await userService.registerUser(req.body);
    response.body = serviceResponse;
    response.message = constants.UserMessage.USER_REGISTERED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong controller : userController :createUser \nError: ${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

module.exports.loginUser = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await userService.loginUser(req.body);
    response.body = serviceResponse;
    response.message = constants.UserMessage.USER_LOGEDIN;
  } catch (error) {
    console.log(
      `Something went wrong : controller : loginController :loginUser`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// deleteUser
module.exports.deleteUser = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await userService.deleteUser(req.params.userId);
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.UserMessage.USER_DELETED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :UserController :delete :deleteUser`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// updateUser
module.exports.updateUser = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await userService.updateUser(
      req.params.userId,
      req.body
    );
    response.body = serviceResponse;
    console.log('rb',response.body);
    response.status = 200;
    response.message = constants.UserMessage.USER_UPDATED;
  } catch (error) {
    console.log(
      `Something went wrong : controller :userController : update : updateUser`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};
