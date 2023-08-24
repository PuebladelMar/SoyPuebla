const { Sizes } = require("../../db");
const { Op } = require("sequelize");

const controllPutSize = async (id, name) => {
  const size = await Sizes.findByPk(id);
  if (!size) {
    throw new Error("size not found");
  }

  const existingSizeWithSameName = await Sizes.findOne({
    where: {
      id: { [Op.not]: id },
      [Op.or]: [{ name }],
    },
  });
  if (existingSizeWithSameName) {
    throw new Error("A size with the same name or code already exists");
  }
  await size.update({ name });
  return "size updated successfully";
};

module.exports = controllPutSize;
