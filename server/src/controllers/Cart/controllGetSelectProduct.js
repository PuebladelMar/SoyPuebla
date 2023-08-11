const { Carts, Stocks, Products, Sizes, Colors } = require("../../db");

const getUserDetails = async (userId) => {
  const userCarts = await Carts.findAll({
    where: { UserId: userId },
  });

  const stocksDetails = [];

  for (const cart of userCarts) {
    const stockId = cart.dataValues.StockId;
    const userStock = await Stocks.findOne({ where: { id: stockId } });
    const productId = userStock.ProductId;

    const product = await Products.findByPk(productId, {
      attributes: ["name", "mainImage", "price"],
    });

    const sizeId = userStock.SizeId;
    const size = await Sizes.findByPk(sizeId, {
      attributes: ["name"],
    });

    const colorId = userStock.ColorId;
    const color = await Colors.findByPk(colorId, {
      attributes: ["codHex", "name"],
    });

    const stockWithQuantity = {
      ...userStock.dataValues,
      quantity: cart.dataValues.quantity,
      product,
      size,
      color,
    };

    stocksDetails.push(stockWithQuantity);
  }

  return stocksDetails;
};

module.exports = getUserDetails;
