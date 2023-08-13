const { Carts, Histories, Stocks, Products } = require("../../db");

const controllPostHistory = async (userId) => {
  const userCart = await Carts.findAll({ where: { UserId: userId } });

  const insertPromises = userCart.map(async (user) => {
    const userStock = await Stocks.findByPk(user.StockId);
    const productId = userStock.ProductId;

    const product = await Products.findByPk(productId, {
      attributes: ["price"],
    });

    await Histories.create({
      quantity: user.quantity,
      StockId: user.StockId,
      UserId: user.UserId,
      unitPrice: product.price,
    });
  });

  await Promise.all(insertPromises);

  return;
};

module.exports = controllPostHistory;
