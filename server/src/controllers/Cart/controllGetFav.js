const { Favorites, Products, ColorImages } = require("../../db.js");

const getAllFav = async (userId) => {
  try {
    const favorites = await Favorites.findAll({ where: { UserId: userId } });

    const favoriteProductIds = favorites.map((fav) => fav.ProductId);

    const productsWithImagesAndColors = await Promise.all(
      favoriteProductIds.map(async (productId) => {
        const product = await Products.findByPk(productId);

        // Obtener las imágenes y colores asociados al producto
        const colorImages = await ColorImages.findAll({ where: { ProductId: productId } });

        const formattedColorImages = colorImages.map((image) => ({
          id: image.id,
          images: image.images,
          ProductId: image.ProductId,
          ColorId: image.ColorId,
        }));

        return {
          ...product.toJSON(),
          colorImages: formattedColorImages,
        };
      })
    );

    return productsWithImagesAndColors;
  } catch (error) {
    throw error;
  }
};

module.exports = getAllFav;