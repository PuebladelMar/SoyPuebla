const { Carts, Stocks, Products, Sizes, Colors, ColorImages } = require("../../db");

const controllGetCart = async (userId) => {
  const userCarts = await Carts.findAll({
    where: { UserId: userId },
  });

  const stocksDetails = [];

  for (const cart of userCarts) {
    const stockId = cart.dataValues.StockId;
    const userStock = await Stocks.findOne({ where: { id: stockId } });
    const productId = userStock.ProductId;

    const product = await Products.findByPk(productId, {
      attributes: ["id", "name", "price", "sale"],
    });

    const sizeId = userStock.SizeId;
    const size = await Sizes.findByPk(sizeId, {
      attributes: ["name"],
    });

    const colorId = userStock.ColorId;
    const color = await Colors.findByPk(colorId, {
      attributes: ["codHex", "name"],
    });

    const image = await ColorImages.findOne({where: {ColorId: colorId, ProductId: product.id}})

    const stockWithQuantity = {
      ...userStock.dataValues,
      quantity: cart.dataValues.quantity,
      product,
      images: image.images,
      size,
      color,
      cartId: cart.id,
    };

    stocksDetails.push(stockWithQuantity);
  }

  return stocksDetails;
};

module.exports = controllGetCart;
