const { Products, Colors, Sizes, Categories, Series, ProductColorSize, conn } = require('../../db.js');

const controllPostProduct = async (req) => {
 
     const { name, price, mainImage, image, sale, color, size, series, category } = req.body;

    const newProduct = await Products.create({ 
        name, price, mainImage, image, sale
    });
    
    const findedCategories  = await Categories.findAll({where: { category : category }} )
    await newProduct.setCategories(findedCategories); 

    // const findedSeries  = await Series.findAll({where: { name : series }} )
    // await newProduct.setSeries(findedSeries); 
    
  // Buscar el color y la talla en sus respectivas tablas
  const [findColor, findSize] = await Promise.all([
    Colors.findAll({ where: { name: color }}),
    Sizes.findAll({ where: { size }}),
  ]);

  console.log(findColor);
  // Crear o actualizar el registro en la tabla intermedia con la cantidad de stock
  const productColorSize = await ProductColorSize.create({
    where: { ProductId: newProduct.id, ColorId: findColor[0].id, SizeId: findSize[0].id },
    defaults: { stock: 0 }
  });

  const response = await Products.findOne({
    where: { id: newProduct.id },
    include: [Colors, Sizes, Categories, Series]
  });
  return response;
};

module.exports = controllPostProduct;

