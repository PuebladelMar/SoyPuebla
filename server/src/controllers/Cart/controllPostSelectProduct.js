const { Carts, Stocks } = require("../../db.js"); // Asegúrate de importar el modelo Stock

const postSelectedProducts = async (req) => {
  const { userId, stockId, quantity } = req.body;

  const stockItem = await Stocks.findByPk(stockId);
  if (stockItem) {
    stockItem.amount -= quantity;
    if (stockItem.amount < 0) {
      throw new Error("Insufficient stock");
    };
    await stockItem.save();
  } else {
    throw new Error("Stock item not found");
  };
  
  const [newItem, created] = await Carts.findOrCreate({
    where: {
      UserId: userId,
      StockId: stockId,
    },
  });

  newItem.quantity += quantity;
  await newItem.save();

  return newItem;
};

module.exports = postSelectedProducts;
