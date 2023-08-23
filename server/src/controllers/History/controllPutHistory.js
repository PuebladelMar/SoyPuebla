const { Histories, Stocks } = require("../../db");
const { Op } = require("sequelize");

const controllPutCategory = async (id, state) => {
  const history = await Histories.findByPk(id);
  if (!history) {
    throw new Error("Category not found");
  };

  if (state === "rejected") {
    const stock = await Stocks.findByPk(history.StockId);
    stock.amount = stock.amount + history.quantity;
    await stock.save();
  }

  await history.update({ state });
  return "history updated successfully";
};

module.exports = controllPutCategory;
