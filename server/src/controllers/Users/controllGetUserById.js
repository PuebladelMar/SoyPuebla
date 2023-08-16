const { Users } = require("../../db.js");

const getUserById = async (id) => {
  let user = await Users.findByPk(id);
  return user;
};

module.exports = getUserById;