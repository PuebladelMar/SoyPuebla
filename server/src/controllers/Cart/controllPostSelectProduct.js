const { Cart, Stock } = require("../../db.js"); // Asegúrate de importar el modelo Stock

const postSelectedProducts = async (req) => {
  const { userId, stockId, quantity } = req.body;
  
  const [newItem, created] = await Cart.findOrCreate({
    where: {
      UserId: userId,
      StockId: stockId,
    },
  });

  if (!created) {
    throw new Error("Esta orden ya existe pero puedes aplicar la logica para seguir comprando");
  }

  if (quantity > 0) {
    const stockItem = await Stocks.findByPk(StockId);
    if (stockItem) {
      stockItem.amount -= quantity;
      //probar que funcione el borrado de stock
      if (stockItem.quantity < 0) {
        throw new Error("Insufficient stock");
      }
      await stockItem.save();
    }
  }

  return newItem;
};

module.exports = postSelectedProducts;
