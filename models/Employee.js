/**
 * Module - Emploee Schema
 */

const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: "Please enter your first name",
      unique: true,
    },
    last_name: {
      type: String,
      required: "Please enter your last name",
      unique: true,
    },
    email: {
      type: String,
      required: "Please enter your email",
      unique: true,
      trim: true,
    },
    number: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
