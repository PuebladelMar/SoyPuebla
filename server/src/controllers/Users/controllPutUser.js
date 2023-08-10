const { Users } = require("../../db.js");

const controllPutUser = async (id, updatedData) => {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new Error("User not found");
  }
  await user.update(updatedData);
  return user;
};

module.exports = controllPutUser;