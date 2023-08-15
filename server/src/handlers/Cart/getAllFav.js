const getAllFav = require("../.././controllers/Cart/controllGetFav");

const  getAllFavorite= async (req, res) => {
    try {
      const userId= req.params.id
      
    const allFav = await getAllFav(userId);
    return res.status(200).json(allFav);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllFavorite;
