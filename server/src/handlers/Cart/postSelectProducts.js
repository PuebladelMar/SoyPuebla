const controllPostSelectProduct = require("../../controllers/Cart/controllPostSelectProduct");

const postSelectProducts = async (req, res) => {
  try {
    const newItem = await controllPostSelectProduct(req);
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postSelectProducts;
