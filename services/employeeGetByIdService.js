const { findById } = require("../helpers/findByIdFunction");

const getEmployeeById = async (id) => {
  try {
    const getUser = await findById(id);
    return {
      id: getUser._id,
      first_name: getUser.first_name,
      last_name: getUser.last_name,
      email: getUser.email,
      number: getUser.number,
      gender: getUser.gender,
      photo: getUser.photo,
    };
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getEmployeeById };
