const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(process.env["DB_CONNECTION_STRING"], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { connectDb };
