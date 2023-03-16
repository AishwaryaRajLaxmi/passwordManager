const passwordModel = require("../Database/Models/passwordModel");
const bcrypt = require("bcrypt");

module.exports.createPassword = async (serviceData) => {
  try {
    const newData = new passwordModel(serviceData);
    const hashPassword = await bcrypt.hash(serviceData.password, 10);
    newData.password = hashPassword;
    const response = await newData.save();
    return response;
  } catch (error) {
    console.log(
      `Something went wrong service : passwordService: createPassword\nError: ${error.message}`
    );
    throw new Error(error.message);
  }
  ``;
};

// deletePassword
module.exports.deletePassword = async (serviceData) => {
  try {
    const response = await passwordModel.findByIdAndDelete(serviceData);
    console.log("responsdel", response);

    if (!response) {
      throw new Error("Invalid id");
    }
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :passwordService : deletePassword`
    );
    throw new Error(error.message);
  }
};

// getAllPassword
module.exports.getAllPassword = async (serviceData) => {
  const { skip = 0, limit = 10 } = serviceData;
  try {
    const response = await passwordModel
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :passwordService: getAllPassword`
    );
    throw new Error(error.message);
  }
};

// updatePassword
module.exports.updatePassword = async (id, body) => {
  try {
    if (body.password) {
      const hashPassword = await bcrypt.hash(body.password, 10);
      body.password = hashPassword;
    }
    const response = await passwordModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: services :passwordService : updatePassword :\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// getPasswordById
module.exports.getPasswordById = async (serviceData) => {
  try {
    const response = passwordModel.findById(serviceData);
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :passwordService : getPasswordById`
    );
    throw new Error(error.message);
  }
};

// getPasswordByCategory
module.exports.getPasswordByCategory = async (serviceData) => {
  //   const { category } = serviceData;
  try {
    const response = await passwordModel.find({
      category: serviceData.category,
    });

    console.log("response", response);

    if (!response) {
      throw new Error("Id is not valid");
    }

    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :passwordService: getPasswordByCategory`
    );
    throw new Error(error.message);
  }
};
