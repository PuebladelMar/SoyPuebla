const { Series } = require('../../db.js');

const deleteSeriesController = async (id) => {
  const series = await Series.findByPk(id);
  if (!series) {
    throw new Error("Serie not found.");
  }

  await series.destroy();

  return { message: "Serie deleted successfully." };
};

module.exports = deleteSeriesController;
//
