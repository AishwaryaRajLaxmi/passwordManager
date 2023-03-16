const userModel = require("../Database/Models/userModel");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// registerUser

module.exports.registerUser = async (serviceData) => {
  console.log("servicedata", serviceData);
  try {
    const userResponse = await userModel
      .findOne({ email: serviceData.email })
      .maxTimeMS(30000);

    if (userResponse) {
      throw new Error("User Already Exists");
    }

    const newData = new userModel(serviceData);

    // encrypt the password
    const hashPassword = await bcrypt.hash(newData.password, 10);

    newData.password = hashPassword;
    const response = await newData.save();
    return response;
  } catch (error) {
    console.log(
      `Something went wrong service : userService : registerUser\nError: ${error.message}`
    );
    throw new Error(error.message);
  }
};

// loginUser

module.exports.loginUser = async (serviceData) => {
  try {
    const userResponse = await userModel.findOne({ email: serviceData.email });
    console.log("useresponse", userResponse);

    if (!userResponse) {
      throw new Error("User not found");
    }

    // compare the password
    const isMatch = await bcrypt.compare(
      serviceData.password,
      userResponse.password
    );

    if (isMatch) {
      const token = jwt.sign(
        { userId: userResponse._id },
        process.env.JWT_SECRET_KEY
      );

      return { jwtToken: token };
    } else {
      throw new Error("Password does not match");
    }
  } catch (error) {
    console.log(
      `Something went wrong : service :userService :loginUser\nError:${error}`
    );
    throw new Error(error);
  }
};

// deleteUser
module.exports.deleteUser = async (serviceData) => {
  try {
    const response = await userModel.findByIdAndDelete(serviceData);
    return response;
  } catch (error) {
    console.log(`Something went wrong: service :userService: user`);
    throw new Error(error.message);
  }
};

// updateUser
module.exports.updateUser = async (uid, body) => {
  try {
    if (body.password) {
      const hashPassword = await bcrypt.hash(body.password, 10);
      body.password = hashPassword;
    }
    const response = await userModel.findByIdAndUpdate(uid, body, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: services :updateService :uddateUser\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};
