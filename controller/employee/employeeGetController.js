/**
 * Module - Employee Get request
 */

const { services } = require("../../validation/schemaValidation");
const { ERRORS } = require("../../validation/error");
const { getEmployees } = require("../../services/employeeGetService");

const getallEmployees = async (req, res, next) => {
  const { error, value } = services.validate(res.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }

  try {
    const data = await getEmployees();
    res.status(201).json(data);
  } catch (e) {
    console.log(e.message);
    return res.status(403).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
};

module.exports = { getallEmployees };
