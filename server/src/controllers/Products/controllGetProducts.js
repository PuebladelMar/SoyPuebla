const {Products,Colors,Sizes,Categories,Series,Stocks} = require("../../db.js");
const {Op}=require("sequelize")

const controllGetProducts = async (req) => {
  const { color, size, category, serie, sale, price, order, name } = req.query;
  if (name) {
    const capitalizeString = (str) => {
      let string = str.toString();
      return str
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };
    const productWanted = capitalizeString(name).trim();

    const productByName = await Products.findAll({
      where: {
        name: {
          [Op.iLike]: `%${productWanted}%`, //Op.iLike de Sequelize para realizar una búsqueda insensible a mayúsculas y minúsculas.
        },
      },
    });
   
    return productByName
  }
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

  let filterProducts = products.map((product) => {
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

  if (color) {
    const response = [];
    const findColor = await Colors.findOne({ where: { name: color } });
    filterProducts.map((product) => {
      const match = product.stock.find(
        (stock) => stock.ColorId === findColor.id
      );
      if (match) {
        response.push(product);
      }
    });
    filterProducts = response;
  }

  if (size) {
    const response = [];
    const findSize = await Sizes.findOne({ where: { name: size } });
    filterProducts.map((product) => {
      const match = product.stock.find((stock) => stock.SizeId === findSize.id);
      if (match) {
        response.push(product);
      }
    });
    filterProducts = response;
  }

  if (category) {
    const response = [];
    filterProducts.map((product) => {
      const match = product.category.find((c) => c.name === category);
      if (match) {
        response.push(product);
      }
    });
    filterProducts = response;
  }

  if (serie) {
    const response = [];
    filterProducts.map((product) => {
      const match = product.series.find((s) => s.name === serie);
      if (match) {
        response.push(product);
      }
    });
    filterProducts = response;
  }

  if (sale) {
    const response = filterProducts.filter((product) => product.sale === true);
    filterProducts = response;
  }

  return filterProducts;
};

module.exports = controllGetProducts;
