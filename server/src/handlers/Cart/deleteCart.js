const deleteCartController = require('../../controllers/Cart/controllDeleteCart');

const deleteCart = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteCartController(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteCart;