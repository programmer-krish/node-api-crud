const { findById } = require("../helpers/findByIdFunction");

const putEmployeeData = async (
  id,
  firstName,
  lastName,
  email,
  number,
  gender,
  photo
) => {
  try {
    const updatedEmployee = await findById(id);

    if (firstName) {
      updatedEmployee.first_name = firstName;
    }
    if (lastName) {
      updatedEmployee.last_name = lastName;
    }
    if (email) {
      updatedEmployee.email = email;
    }
    if (number) {
      updatedEmployee.number = number;
    }
    if (gender) {
      updatedEmployee.gender = gender;
    }
    if (photo) {
      updatedEmployee.photo = photo;
    }

    updatedEmployee.save();
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { putEmployeeData };
