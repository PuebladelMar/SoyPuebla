const controllPostCart = require("../../controllers/Cart/controllPostCart");

const postCart = async (req, res) => {
  try {
    const newItem = await controllPostCart(req);
    res.status(201).send(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postCart;
