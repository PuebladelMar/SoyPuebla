const { Series } = require('../../db.js');

const deleteSeriesController = async (id) => {
  try {
   
    const series = await Series.findByPk(id);
    if (!series) {
      throw new Error("Serie not found.");
    }

    await series.destroy();

    return { message: "Serie deleted successfully." };
  } catch (error) {
    throw error;
  }
};

module.exports = deleteSeriesController;