const { Products, Stocks, Carts } = require('../../db.js');

const deleteProductController = async (id) => {
    const product = await Products.findByPk(id);
    if (!product) {
      throw new Error("Product not found.");
    }
    const stocks = await Stocks.findAll({where: {ProductId: product.id}});

    await Promise.all(stocks.map(async (stock) => {
      await Carts.destroy({ where: { StockId: stock.id } });
    }));

    await Promise.all(stocks.map(async (stock) => {
      await stock.destroy();
    }));

    await product.destroy();
    return { message: "Product deleted successfully." };
};

module.exports = deleteProductController;
