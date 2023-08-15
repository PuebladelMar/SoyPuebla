const { Favorites, Products } = require("../../db.js");

const deleteFavController = async (userId, productId) => {
  console.log(userId);
  console.log(productId);
  try {
    await Favorites.destroy({
      where: { UserId: userId, ProductId: productId },
    });

    const remainingFavorites = await Favorites.findAll({
      where: { UserId: userId },
    });

    const remainingProductIds = remainingFavorites.map((fav) => fav.ProductId);

    const remainingProducts = await Products.findAll({
      where: { id: remainingProductIds },
    });

    return remainingProducts;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteFavController;






