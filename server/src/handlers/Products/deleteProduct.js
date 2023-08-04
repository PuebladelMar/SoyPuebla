const deleteProductController = require('../../controllers/Products/deleteProductController');

const deleteProduct = async (req, res) => {
  const { id } = req.params;
    const result = await deleteProductController(id);
    return res.status(200).json(result);
};

module.exports = deleteProduct;
