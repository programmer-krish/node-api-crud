/**
 * Module - Employee Post request
 */

const { ERRORS } = require("../../validation/error");
const { createNewEmployee } = require("../../services/employeePostService");
const { postSchema } = require("../../validation/schemaValidation");
const postEmployee = async (req, res, next) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      error: ERRORS.NOT_FOUND,
    });
  }
  const { first_name, last_name, email, number, gender, photo } = value;

  try {
    const data = await createNewEmployee(
      first_name,
      last_name,
      email,
      number,
      gender,
      photo
    );

    res.status(201).json(data);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({
      status: "error",
      error: ERRORS.DUPLICATE_USER,
    });
  }
};

module.exports = { postEmployee };
