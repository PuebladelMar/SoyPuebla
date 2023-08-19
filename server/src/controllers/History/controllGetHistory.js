const { Histories, Stocks, Products, Sizes, Colors, ColorImages } = require("../../db");

const controllGetHistory = async (userId) => {
  const userHistory = await Histories.findAll({ where: { UserId: userId } });

  const responsePromises = userHistory.map(async (user) => {
    const stock = await Stocks.findByPk(user.StockId);

    const color = await Colors.findByPk(stock.dataValues.ColorId, {
      attributes: ["codHex", "name", "id"],
    });

    const size = await Sizes.findByPk(stock.dataValues.SizeId, {
      attributes: ["name"],
    });

    const product = await Products.findByPk(stock.dataValues.ProductId, {
      attributes: ["name", "id"],
    });

    const images = await ColorImages.findOne({where: {ColorId: color.id, ProductId: product.id}});

    return { color, size, product, unitPrice: user.unitPrice, quantity: user.quantity, images };
  });

  const response = await Promise.all(responsePromises);

  return response;
};

module.exports = controllGetHistory;
