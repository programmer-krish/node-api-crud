const { ERRORS } = require("../../validation/error");
const {
  postSchema,
  responseSchema,
} = require("../../validation/schemaValidation");
const { getEmployeeById } = require("../../services/employeeGetByIdService");

const getallEmployeesById = async (req, res, next) => {
  const { error, value } = responseSchema.validate(res.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
  try {
    const data = await getEmployeeById(req.params.empId);
    res.status(200).json(data);
  } catch (e) {
    console.log(e.message);
    return res.status(403).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
};

module.exports = { getallEmployeesById };
