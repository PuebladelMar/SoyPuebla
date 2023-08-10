const { Users } = require("../../db.js");

const controllDeleteUser = async (id) => {
  const user = await Users.findByPk(id);
  if (!user) {
    throw new Error("User not found.");
  }
  await user.destroy();
  return { message: "User deleted successfully." };
};

module.exports = controllDeleteUser;