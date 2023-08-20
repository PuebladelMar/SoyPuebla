const { Products, Colors, Sizes, Categories, Series, Stocks, ColorImages } = require("../../db");

const controllPutProducts = async(req)=>{
    const { name, price, sale, description, series, categories, colorImage } = req.body;
    const { id } = req.params;

    await Products.update(
        { name, price, sale, description },
        { where: { id }}
    );

    const product = await Products.findByPk(id);

    if (product) {
        await product.setCategories([]);
        await product.setSeries([]);

        for (const categoryName of categories) {
            const category = await Categories.findOne({ where: { name: categoryName } });
            if (category) {
                await product.addCategory(category);
            };
        };

        for (const seriesName of series) {
            const serie = await Series.findOne({ where: { name: seriesName } });
            if (serie) {
                await product.addSeries(serie);
            };
        };
    };

    for (const variation of colorImage) {
        const { color, stocks, images } = variation;

        const findedColor = await Colors.findOne({ where: { name: color }});

        let colorImageInstance = await ColorImages.findOne({
            where: { ProductId: id, ColorId: findedColor.id },
        });
      
        if (!colorImageInstance) {
            colorImageInstance = await ColorImages.create({
            images: images,
            ProductId: id,
            ColorId: findedColor.id,
            });
        } else {
            await colorImageInstance.update({ images: images });
        }
        for (const stock of stocks) {
            const { size, amount } = stock;
      
            const findedSize = await Sizes.findOne({ where: { name: size } });
      
            let stockInstance = await Stocks.findOne({
              where: {
                ProductId: id,
                ColorId: findedColor.id,
                SizeId: findedSize.id,
              },
            });
      
            if (!stockInstance) {
              stockInstance = await Stocks.create({
                ProductId: id,
                ColorId: findedColor.id,
                SizeId: findedSize.id,
                amount: amount,
              });
            } else {
              await stockInstance.update({ amount: amount });
            }
        }
    }

    return "Product updated successfully";
};

module.exports = controllPutProducts;