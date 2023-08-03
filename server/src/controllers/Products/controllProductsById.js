const { Products, Colors, Sizes, Categories, Series, Stocks } = require("../../db");

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

  let ubicationColor = product.Stocks[0].ColorId;
  let ubicationSize = product.Stocks[0].SizeId;

  let color = await Colors.findOne({
    where: {
      id: ubicationColor,
    },
  });

  let size = await Sizes.findOne({
    where: {
      id: ubicationSize,
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
    stock: product.Stocks[0].amount,
    color: color.name,
    codHex: color.codHex,
    size: size.name,
  };

  return concatenatedResult;
};

module.exports = { productById };