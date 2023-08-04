const deleteProductController = require('../../controllers/Products/deleteProductController');

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteProductController(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteProduct;