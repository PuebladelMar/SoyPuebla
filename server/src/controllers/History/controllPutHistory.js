const { Histories } = require("../../db");
const { Op } = require("sequelize");

const controllPutCategory = async (id, state) => {
  const history = await Histories.findByPk(id);
  if (!history) {
    throw new Error("Category not found");
  }

  const existingHistoryWhithSameState = await  Histories.findOne({
    where: {
      id: { [Op.not]: id }
     
    },
  });

  await history.update({ state });
  return "history updated successfully";
};

module.exports = controllPutCategory;
