const { Products, Colors, Sizes, Categories, Series, Stocks, ColorImages } = require("../../db.js");
const { Op } = require("sequelize");

const controllGetProducts = async (req) => {
  const { color, size, category, serie, sale, minPrice, maxPrice, order, name } = req.query;
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
          [Op.iLike]: `%${productWanted}%`,
        },
      },
    });

    const allColorImages = await ColorImages.findAll();

    const productWithImages = productByName.map((product) => {
      const colorImages = allColorImages.filter(
        (colorImage) => colorImage.ProductId === product.id
      );
      return {
        ...product.dataValues,
        colorImages: colorImages.map((colorImage) => colorImage)
      };
    });
  
    return productWithImages;
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
      sale: product.sale,
      category: product.Categories,
      series: product.Series,
      stock: product.Stocks,
    };
  });

  const allColorImages = await ColorImages.findAll();

  filterProducts = filterProducts.map((product) => {
    const colorImages = allColorImages.filter(
      (colorImage) => colorImage.ProductId === product.id
    );
    return {
      ...product,
      colorImages: colorImages.map((colorImage) => colorImage)
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

  if (sale === 'true') {
    const response = filterProducts.filter((product) => product.sale > 0);
    filterProducts = response;
  }

  if (minPrice && maxPrice) {
    const response = filterProducts.filter(
      (product) =>
        Number(product.price) >= Number(minPrice) &&
        Number(product.price) <= Number(maxPrice)
    );
    filterProducts = response;
  }

  if (order == "Precio Ascendente") {
    const response = filterProducts.sort((a, b) => a.price - b.price);

    filterProducts = response;
  }
  if (order == "Precio Descendente") {
    const response = filterProducts.sort((a, b) => b.price - a.price);

    filterProducts = response;
  }

  return filterProducts;
};

module.exports = controllGetProducts;
