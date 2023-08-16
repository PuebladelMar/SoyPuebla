const { Users } = require("../../db.js");

const controllPutUser = async (id, updatedFields) => {
  try {
    const [rowsUpdated, [updatedUser]] = await Users.update(updatedFields, {
      where: { id },
      returning: true,
    });

    if (rowsUpdated === 0) {
      throw new Error("User not found");
    }

    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
  
module.exports = controllPutUser;
