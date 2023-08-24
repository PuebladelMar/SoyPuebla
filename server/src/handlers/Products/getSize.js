const controllGetSize = require("../../controllers/Products/controllGetSize");

const getSize = async (req, res) => {
  try {
    const categories = await controllGetSize();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getSize;
