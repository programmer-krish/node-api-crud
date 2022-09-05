/**
 * Date - 21/08/2022
 * Module - Database connection
 */
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo connect ${conn.connection.host}`);
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDb;
