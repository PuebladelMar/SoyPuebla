const deleteSeriesController = require('../../controllers/Products/deleteSeriesController');

const deleteSeries = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteSeriesController(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteSeries;