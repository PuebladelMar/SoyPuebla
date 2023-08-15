// const { Favorites } = require("../../db");

// const controllPostFav = async (userId, productId) => {
  
//  const [favorite, created] = await Favorites.findOrCreate({
//     where: { UserId: userId, ProductId: productId }})

//   return favorite
// }

// module.exports = controllPostFav;

const { Favorites, Products } = require("../../db");

const controllPostFav = async (userId, productId) => {
  try {
    const [favorite, created] = await Favorites.findOrCreate({
      where: { UserId: userId, ProductId: productId },
    });

    const allFavorites = await Favorites.findAll({
      where: { UserId: userId },
    });

    const favoriteProductIds = allFavorites.map((fav) => fav.ProductId);

    // const remainingProducts = await Products.findAll({
    //   where: { id: favoriteProductIds },
    // });

    // return remainingProducts;
    return favoriteProductIds
  } catch (error) {
    throw error;
  }
}

module.exports = controllPostFav;