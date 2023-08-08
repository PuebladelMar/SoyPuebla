const { Users } = require("../../db.js");

const getAllUsers = async () => {
  const usersList = await Users.findAll();
  return usersList;
};

module.exports = getAllUsers;