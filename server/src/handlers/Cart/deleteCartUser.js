const deleteCartUserController = require('../../controllers/Cart/controllDeleteCartUser');

const deleteCartUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteCartUserController(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteCartUser;