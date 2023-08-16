const controllPostFav = require("../../controllers/Cart/controllPostFav");

const postProductFavorites = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const response = await controllPostFav(userId, productId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postProductFavorites;