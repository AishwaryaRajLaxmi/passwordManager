const passwordService = require("../services/passwordServices");
const constants = require("../helpers/constansts");
const passwordModel = require("../Database/Models/passwordModel");

// createPassword

module.exports.createPassword = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await passwordService.createPassword(req.body);
    response.body = serviceResponse;
    response.message = constants.PasswordMessage.PASSWORD_CREATED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong controller : passwordController :createPassword\nError: ${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// deletePassword
module.exports.deletePassword = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await passwordService.deletePassword(
      req.params._id
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.PasswordMessage.PASSWORD_DELETED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :passwordController : deletePassword`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// getAllPassword
module.exports.getAllPassword = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await passwordService.getAllPassword(req.query);
    response.body = serviceResponse;
    response.message = constants.PasswordMessage.PASSWORD_FETCHED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong : controller : passwordController : getAllPassword\n Error:${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};


// updatePassword
module.exports.updatePassword = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await passwordService.updatePassword(
      req.params._id,
      req.body
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.PasswordMessage.PASSWORD_UPDATED;
  } catch (error) {
    console.log(
      `Something went wrong : controller : passwordController :updatePassword `
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

//getPasswordById
module.exports.getPasswordById = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await passwordService.getPasswordById(
      req.params._id
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.PasswordMessage.PASSWORD_FETCHED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :passwordController : getPasswordById`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// getPasswordByCategory
module.exports.getPasswordByCategory = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await passwordService.getPasswordByCategory(
      req.query
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.PasswordMessage.PASSWORD_FETCHED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :passwordController : getPasswordByCategory`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

