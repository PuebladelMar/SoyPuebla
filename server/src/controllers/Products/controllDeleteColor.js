const { Colors, Products, ColorImages } = require('../../db');

const controllDeleteColor = async (id) => {
  const color = await Colors.findByPk(id);
  if (!color) throw Error('Color no encontrado');
  const colorImagesWithColor = await ColorImages.findAll({
    where: {
      ColorId: color.id
    }
  });

  const productIdsWithColor = colorImagesWithColor.map(image => image.ProductId);

  const productsWithColor = await Products.findAll({
    where: {
      id: productIdsWithColor
    }
  });

  for (const product of productsWithColor) {
    const remainingColorImages = await ColorImages.count({
      where: {
        ProductId: product.id
      }
    });

    if (remainingColorImages === 1) {
      await product.destroy();
    }
  }

  await color.destroy();

  return { message: 'Color eliminado exitosamente' };
};

module.exports = controllDeleteColor;

