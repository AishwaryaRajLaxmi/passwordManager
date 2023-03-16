const categoryModel = require("../Database/Models/categoryModel");
// const  = require("../Database/Models/categoryModel");

// createCategory

module.exports.createCategory = async (serviceData) => {
  try {
    const dbResponse = await categoryModel.findOne({
      label: serviceData.label,
    });

    if (dbResponse) {
      throw new Error("label already exist");
    }
    const newData = new categoryModel(serviceData);
    const response = await newData.save();
    return response;
  } catch (error) {
    console.log(
      `Something went wrong service : categoryService: createCategory\nError: ${error.message}`
    );
    throw new Error(error.message);
  }
};

// deleteCategory
module.exports.deleteCategory = async (serviceData) => {
  try {
    const response = await categoryModel.findByIdAndDelete(serviceData);
    if (!response) {
      throw new Error("invalid id");
    }
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :categoryService : deleteCategory`
    );
    throw new Error(error.message);
  }
};

// getAllCategory
module.exports.getAllCategory = async (serviceData) => {
  const { skip = 0, limit = 10 } = serviceData;
  try {
    const response = await categoryModel
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :categoryService : getAllCategory`
    );
    throw new Error(error.message);
  }
};

// getCategoryById
module.exports.getCategoryById = async (serviceData) => {
  try {
    const response = await categoryModel.findById(serviceData);
   
    if(!response){
        throw new Error("invalid id");
    }
    return response;
  } catch (error) {
    console.log(
      `Something went wrong: service :categoryService : getCategoryById`
    );
    throw new Error(error.message);
  }
};
// // updateUser
// module.exports.updateUser = async (uid, body) => {
//   try {
//     if (body.password) {
//       const hashPassword = await bcrypt.hash(body.password, 10);
//       body.password = hashPassword;
//     }
//     const response = await userModel.findByIdAndUpdate(uid, body, {
//       new: true,
//     });
//     return response;
//   } catch (error) {
//     console.log(
//       `Something went wrong: services :updateService :uddateUser\nError:${error.message}`
//     );
//     throw new Error(error.message);
//   }
// };
