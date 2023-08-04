const deleteSizeController = require('../../controllers/Products/deleteSizeController');

const deleteSize = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteSizeController(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteSize;