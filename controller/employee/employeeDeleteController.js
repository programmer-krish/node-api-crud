const { ERRORS } = require("../../validation/error");
const { deleteEmployee } = require("../../services/employeeDeleteService");

const deleteEmployeeById = async (req, res, next) => {
  const id = req.params.empId;

  try {
    await deleteEmployee(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
};

module.exports = { deleteEmployeeById };
