const { Products, Colors, Sizes, Categories, Series, Stocks } = require('../../db.js');

const controllPostProduct = async (req) => {
  const { name, price, mainImage, image, sale, description, color, size, series, category } = req.body;
  //const { name, price, mainImage, image, sale, description, series, category, colorImage } = req.body;

  const newProduct = await Products.create({ name, price, mainImage, image, sale, description });

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

  const findedCategories  = await Categories.findAll({where: { name : category }} );
  await newProduct.setCategories(findedCategories); 

  const findedSeries  = await Series.findAll({where: { name : series }} );
  await newProduct.setSeries(findedSeries); 

  return "product added successfully";

  /*for(const variation of colorImage){
    const { color, stocks } = variation;
    for(const stock of stocks){
      const { size, amount } = stock;
      const [findedColor, findedSize] = await Promise.all([
        Colors.findOne({ where: { name: color }}),
        Sizes.findOne({ where: {name: size}})
      ]);

      const [ newStock, created ] = await Stocks.create({
        ProductId: newProduct.id,
        ColorId: findedColor[0].id,
        SizeId: findedSize[0].id,
        amount: amount
      });
    };
  };*/
};

module.exports = controllPostProduct;