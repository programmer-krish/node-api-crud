const Employee = require("../models/Employee");

const getEmployees = async () => {
  try {
    const getUser = await Employee.find();
    return getUser;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getEmployees };
