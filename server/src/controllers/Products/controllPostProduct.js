const { Products, Colors, Sizes, Categories, Series, Stocks } = require('../../db.js');

const controllPostProduct = async (req) => {
  const { name, price, mainImage, image, sale, color, size, series, category } = req.body;

  const newProduct = await Products.create({ name, price, mainImage, image, sale });

  const stockPromises = [];

  color.forEach((c) => {
    size.forEach((s) => {
      stockPromises.push(
        (async () => {
          const [findedColor, findedSize] = await Promise.all([
            Colors.findOrCreate({ where: { name: c }}),
            Sizes.findOrCreate({ where: { name: s }}),
          ]);
          await Stocks.create({
            ColorId: findedColor[0].id,
            SizeId: findedSize[0].id,
            ProductId: newProduct.id,
          });
        })()
      );
    });
  });

  await Promise.all(stockPromises);

  const findedCategories  = await Categories.findAll({where: { name : category }} )
  await newProduct.setCategories(findedCategories); 

  const findedSeries  = await Series.findAll({where: { name : series }} )
  await newProduct.setSeries(findedSeries); 

  return "Todo ok"
};

module.exports = controllPostProduct;