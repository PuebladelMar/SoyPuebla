const { Colors } = require("../../db");
const { Op } = require("sequelize");

const controllPutColor = async (id, name, codHex) => {
  const color = await Colors.findByPk(id);
  if (!color) {
    throw new Error("Color not found");
  }

  const existingColorWithSameNameOrHex = await Colors.findOne({
    where: {
      id: { [Op.not]: id },
      [Op.or]: [{ name }, { codHex }],
    },
  });
  if (existingColorWithSameNameOrHex) {
    throw new Error("A color with the same name or code already exists");
  }
  await color.update({ name, codHex });
  return "Color updated successfully";
};

module.exports = controllPutColor;
