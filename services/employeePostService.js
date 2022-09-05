const Employee = require("../models/Employee");

const createNewEmployee = async (
  firstName,
  lastName,
  email,
  number,
  gender,
  photo
) => {
  try {
    const newUser = new Employee({
      first_name: firstName,
      last_name: lastName,
      email: email,
      number: number,
      gender: gender,
      photo: photo,
    });

    const saveUser = await newUser.save();
    return saveUser;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createNewEmployee,
};
