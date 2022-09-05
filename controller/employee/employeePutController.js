/**
 * Module - Employee Put request
 */

const { ERRORS } = require("../../validation/error");
const { putEmployeeData } = require("../../services/employeePutService");
const { postSchema } = require("../../validation/schemaValidation");

//Put Controller
const putEmployee = async (req, res, next) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
  const { first_name, last_name, email, number, gender, phtoto } = value;
  const id = req.params.empId;

  try {
    await putEmployeeData(
      id,
      first_name,
      last_name,
      email,
      number,
      gender,
      phtoto
    );
    res.status(200).json({ message: "Updated Successfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({
      status: "error",
      error: ERRORS.DUPLICATE_USER,
    });
  }
};

module.exports = { putEmployee };
