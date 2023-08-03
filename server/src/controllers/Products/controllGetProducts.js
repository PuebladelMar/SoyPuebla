const {
  Products,
  Colors,
  Sizes,
  Categories,
  Series,
  Stocks,
} = require("../../db.js");

const controllGetProducts = async (req) => {
  const { color, sizes, categories, series, sale, price, order } = req.query;

  const products = await Products.findAll({
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

  const filterProducts = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      mainImage: product.mainImage,
      sale: product.sale,
      category: product.Categories,
      series: product.Series,
      stock: product.Stocks,
    };
  });

  const response = [];

  if (color) {
    const findColor = await Colors.findOne({ where: { name: color } });
    filterProducts.map((product) => {
      const match = product.stock.find(stock => stock.ColorId === findColor.id)
      if (match) {
        response.push(product);
      }
    }) 
    return response;
  }

  return filterProducts;
};

module.exports = controllGetProducts;
