const Employee = require("../models/Employee");

const findById = async (id) => {
  const singleEmployee = await Employee.findById(id).exec();

  if (!singleEmployee) {
    throw Error;
  }
  return singleEmployee;
};

module.exports = { findById };
