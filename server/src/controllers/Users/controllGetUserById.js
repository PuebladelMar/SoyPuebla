const { Users } = require("../../db.js");

const getUserById = async (id) => {
  let user = await Users.findByPk(id);
  console.log(user);
  return user;
};

module.exports = getUserById;