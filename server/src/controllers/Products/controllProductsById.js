const {Products,Colors,Sizes,Categories,Series,Stocks} = require("../../db");

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
        attributes: ["ColorId", "SizeId", "amount"],
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

    let concatenatedResult = {
      id: product.id,
      name: product.name,
      price: product.price,
      mainImage: product.mainImage,
      image: product.image,
      description: product.description,
      sale: product.sale,
      category: product.Categories,
      series: product.Series,
      stock: stock.amount,
      color: color.name,
      codHex: color.codHex,
      size: size.name,
    };

    concatenatedResults.push(concatenatedResult);
  }

  return concatenatedResults;
};

module.exports = { productById };
