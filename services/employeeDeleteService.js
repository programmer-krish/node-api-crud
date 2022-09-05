const Employee = require("../models/Employee");

const deleteEmployee = async (empId) => {
  try {
    const deletedEmployee = await Employee.deleteOne({ _id: empId });
    if (deletedEmployee.deletedCount === 0) {
      throw new Error("Could not find Employee.");
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { deleteEmployee };
