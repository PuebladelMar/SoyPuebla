const getAllSeries = require("../.././controllers/Products/controllGetSeries");

const getSeries = async (req, res) => {
  try {
    const allSeries = await getAllSeries();
    return res.status(200).json(allSeries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getSeries;
