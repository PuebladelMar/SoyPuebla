const { Carts } = require("../../db.js");

const deleteCartUserController = async (id) => {
  if (id) {
    await Carts.destroy({
      where: { UserId: id },
    });

    return { message: "CartUser deleted successfully." };
  }
};

module.exports = deleteCartUserController;
