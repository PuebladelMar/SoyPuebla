const controllGetCart = require("../../controllers/Cart/controllGetCart")

const getCart = async (req, res) => {
  const { id } = req.params;
try {
    const response = await controllGetCart(id);
    if (!response) {
      res.status(400).send("non-existent users");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCart;
