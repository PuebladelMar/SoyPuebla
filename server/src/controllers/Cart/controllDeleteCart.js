const { Carts } = require('../../db.js');

const deleteCartController = async (id) => {
  if (id) {
    const cart = await Carts.findByPk(id);
    if (!cart) {
      throw new Error("Cart not found.");
    }

    await cart.destroy();

    return { message: "Cart deleted successfully." };
  } 
};

module.exports = deleteCartController;