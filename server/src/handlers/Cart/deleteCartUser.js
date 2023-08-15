const deleteCartUserController = require('../../controllers/Cart/controllDeleteCartUser');

const deleteCartUser = async (req, res) => {
  const { id, sale } = req.query;
  try {
    const result = await deleteCartUserController(id, sale);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteCartUser;