const { Carts, Stocks } = require("../../db.js");
const cron = require("node-cron");
const Sequelize = require('sequelize');

const controllPostCart = async (req) => {
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

  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 2);
  
  const [newItem, created] = await Carts.findOrCreate({
    where: {
      UserId: userId,
      StockId: stockId,
    },
    defaults: {
      expiresAt: expirationDate,
    },
  });

  newItem.quantity += quantity;
  await newItem.save();

  return newItem;
};

cron.schedule("* * * * *", async () => {
  try {
    const currentTime = new Date();
    const expiredItems = await Carts.findAll({
      where: {
        expiresAt: {
          [Sequelize.Op.lt]: currentTime, // Filtra los elementos vencidos
        },
      },
    });

    for (const item of expiredItems) {
      const stockItem = await Stocks.findByPk(item.StockId);
      if (stockItem) {
        stockItem.amount += item.quantity; // Restaura el stock
        await stockItem.save();
      }
      await item.destroy(); // Elimina el elemento del carrito
    }
  } catch (error) {
    console.error("Error while cleaning expired items:", error);
  }
});

module.exports = controllPostCart;
