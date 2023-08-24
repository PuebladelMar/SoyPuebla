const { Products, Colors, Sizes, Categories, Series, Stocks, ColorImages } = require('../../db.js');

const controllPostProduct = async (req) => {
  const { name, price, sale, description, series, category, colorImage } = req.body;

  const newProduct = await Products.create({ name, price, sale, description });

  const findedCategories  = await Categories.findAll({where: { name : category }} );
  await newProduct.setCategories(findedCategories); 

  const findedSeries  = await Series.findAll({where: { name : series }} );
  await newProduct.setSeries(findedSeries); 

  for(const variation of colorImage){
    const { color, stocks, images } = variation;

    const findedColor = await Colors.findOne({ where: { name: color }});

    const newColorImage = await ColorImages.create({
      images: images,
      ProductId: newProduct.id,
      ColorId: findedColor.id
    });

    for(const stock of stocks){
      const { size, amount } = stock;
      
      const findedSize = await Sizes.findOne({ where: {name: size}});

      const newStock = await Stocks.create({
        ProductId: newProduct.id,
        ColorId: findedColor.id,
        SizeId: findedSize.id,
        amount: amount
      });
    };
  };

  return "product added successfully";
};

module.exports = controllPostProduct;