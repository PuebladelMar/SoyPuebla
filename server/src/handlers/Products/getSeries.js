const getAllSeries = require("../.././controllers/Products/controllGetSeries");

const getSeries = async (req, res) => {
  try {
    const allSeries = await getAllSeries();
    return res.status(200).json(allSeries);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = getSeries;
