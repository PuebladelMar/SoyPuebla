const { Categories, Products } = require('../../db.js');

const deleteCategoryController = async (id) => {
  const category = await Categories.findByPk(id);
  if (!category) {
    throw new Error("category not found.");
  }

  const productsWithCategory = await category.getProducts();

  for (const product of productsWithCategory) {
    const remainingCategories = await product.countCategories();

    if (remainingCategories === 1) {
      await product.destroy();
    }
  }

  await category.destroy();

  return { message: "category deleted successfully." };
};

module.exports = deleteCategoryController;
