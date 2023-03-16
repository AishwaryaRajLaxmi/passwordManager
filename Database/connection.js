const mongoose = require("mongoose");
module.exports.connect = async () => {
  const mongoUrl = process.env.MONGO_URL;
  try {
    const response = await mongoose.connect(mongoUrl);

    if (response) {
      console.log(
        `Database connceted successfully \n Port:${response.connection.port}\nName:${response.connection.name}\nHost:${response.connection.host}`
      );
    }
  } catch (error) {
    console.log(`Database connected Error\nError: ${error.message}`);
  }
};
