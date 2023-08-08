const { productById } = require("../../controllers/Products/controllProductsById")

const getProductsById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await productById(id);
    if (!response) {
      res.status(400).send("non-existent product");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getProductsById;
