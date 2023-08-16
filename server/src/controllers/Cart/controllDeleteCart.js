const { Carts, Stocks } = require('../../db.js');

const deleteCartController = async (id) => {
  const cart = await Carts.findByPk(id);
  if (!cart) {
    throw new Error("Cart not found.");
  }

  const stock = await Stocks.findByPk(cart.StockId);

  stock.amount += cart.quantity;
  await stock.save();

  await cart.destroy();

  return { message: "Cart deleted successfully." };
};

module.exports = deleteCartController;