const controllDeleteColor = require('../../controllers/Products/controllDeleteColor');

const deleteColor = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await controllDeleteColor(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteColor;