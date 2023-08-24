const { Users } = require("../../db.js");

const controllPutUser = async (id, updatedFields) => {

    const rowsUpdated = await Users.update(
      updatedFields, 
      { where: { id } }
    );

    if (rowsUpdated[0] === 0) {
      throw new Error("User not found");
    }

    const updatedUser = await Users.findByPk(id);
    return updatedUser;

    
};

module.exports = controllPutUser;
