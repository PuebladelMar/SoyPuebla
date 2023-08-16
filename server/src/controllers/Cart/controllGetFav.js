const { Favorites, Products } = require("../../db.js");

const getAllFav = async (userId) => {
  try {
    const favorites = await Favorites.findAll({ where: { UserId: userId } });

    const favoriteProductIds = favorites.map((fav) => fav.ProductId);

    const categoriesList = await Products.findAll({
      where: { id: favoriteProductIds },
    });

    return categoriesList;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllFav;