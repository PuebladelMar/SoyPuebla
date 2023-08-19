const { Products, Colors, Sizes, Categories, Series, Stocks, ColorImages } = require("../../db");

const productById = async (id) => {
  let product = await Products.findByPk(id, {
    include: [
      {
        model: Categories,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Series,
        attributes: ["name"],
        through: { attributes: [] },
      },
      {
        model: Stocks,
        attributes: ["id", "ColorId", "SizeId", "amount"],
      },
    ],
  });

  let concatenatedResults = [];

  for (const stock of product.Stocks) {
    let color = await Colors.findOne({
      where: {
        id: stock.ColorId,
      },
    });

    let size = await Sizes.findOne({
      where: {
        id: stock.SizeId,
      },
    });

    let colorImages = await ColorImages.findAll({
      where: {
        ProductId: id,
        ColorId: stock.ColorId,
      },
    });

    let imageUrls = colorImages.reduce((urls, image) => {
      return urls.concat(image.images);
    }, []);

    let concatenatedResult = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      sale: product.sale,
      category: product.Categories,
      series: product.Series,
      stock: stock.amount,
      color: color.name,
      codHex: color.codHex,
      size: size.name,
      stockId: stock.id,
      colorImages: imageUrls
    };

    concatenatedResults.push(concatenatedResult);
  }

  return concatenatedResults;
};

module.exports = productById;