const { Carts, Histories, Stocks, Products } = require("../../db");

const controllPostHistory = async (userId, state) => {
  const userCart = await Carts.findAll({ where: { UserId: userId } });

  const insertPromises = userCart.map(async (user) => {
    const userStock = await Stocks.findByPk(user.StockId);
    const productId = userStock.ProductId;

    const product = await Products.findByPk(productId, {
      attributes: ["price", "sale"],
    });

    await Histories.create({
      quantity: user.quantity,
      StockId: user.StockId,
      UserId: user.UserId,
      unitPrice: product.price * (1 - product.sale / 100),
      state: state
    });
  });

  await Promise.all(insertPromises);

  return;
};

module.exports = controllPostHistory;
