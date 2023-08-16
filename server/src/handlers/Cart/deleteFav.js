const  deleteFavController  = require("../../controllers/Cart/controllDeleteFav.js");

const deleteFav = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const updatedFavorites = await deleteFavController( userId, productId );
    
    return res.status(200).json({
      
      remainingProductIds: updatedFavorites,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFav;