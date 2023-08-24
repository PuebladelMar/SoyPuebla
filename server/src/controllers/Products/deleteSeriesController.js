const { Series, Products } = require('../../db.js');

const deleteSeriesController = async (id) => {
  const series = await Series.findByPk(id);
  if (!series) {
    throw new Error("Serie not found.");
  }

  const productsWithSeries = await series.getProducts();

  for (const product of productsWithSeries) {
    const remainingSeries = await product.countSeries();

    if (remainingSeries === 1) {
      await product.destroy();
    }
  }

  await series.destroy();

  return { message: "Serie deleted successfully." };
};

module.exports = deleteSeriesController;