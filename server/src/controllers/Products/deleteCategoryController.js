const { Categories } = require('../../db.js');

const deleteCategoryController = async (id) => {
  const category = await Categories.findByPk(id);
  if (!category) {
    throw new Error("category not found.");
  }

  await category.destroy();

  return { message: "category deleted successfully." };
};

module.exports = deleteCategoryController;
