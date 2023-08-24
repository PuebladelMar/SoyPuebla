const { Categories } = require("../../db");
const { Op } = require("sequelize");

const controllPutCategory = async (id, name) => {
  const category = await Categories.findByPk(id);
  if (!category) {
    throw new Error("Category not found");
  }

  const existingCategoryWithSameName = await  Categories.findOne({
    where: {
      id: { [Op.not]: id },
      [Op.or]: [{ name }],
    },
  });
  if (existingCategoryWithSameName) {
    throw new Error("A category with the same name or code already exists");
  }
  await category.update({ name });
  return "Category updated successfully";
};

module.exports = controllPutCategory;
//