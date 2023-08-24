const { Histories, Stocks, Products, Sizes, Colors, ColorImages } = require("../../db");

const controllGetHistory = async (userId) => {
  const userHistory = await Histories.findAll({ where: { UserId: userId, state: "approved" }, paranoid: false, });

  const responsePromises = userHistory.map(async (user) => {
    const stock = await Stocks.findByPk(user.StockId, {
      paranoid: false,
    });

    const color = await Colors.findByPk(stock.dataValues.ColorId, {
      attributes: ["codHex", "name", "id"],
      paranoid: false,
    });

    const size = await Sizes.findByPk(stock.dataValues.SizeId, {
      attributes: ["name"],
      paranoid: false,
    });

    const product = await Products.findByPk(stock.dataValues.ProductId, {
      attributes: ["name", "id"],
      paranoid: false,
    });

    const images = await ColorImages.findOne({where: {ColorId: color.id, ProductId: product.id}, paranoid: false,});

    return { color, size, product, unitPrice: user.unitPrice, quantity: user.quantity, images };
  });

  const response = await Promise.all(responsePromises);

  return response;
};

module.exports = controllGetHistory;
