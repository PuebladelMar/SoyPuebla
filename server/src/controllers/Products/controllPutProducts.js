const { Products, Colors, Sizes, Categories, Series, Stocks, ColorImages } = require("../../db");

const controllPutProducts = async(req)=>{
    const { name, price, sale, description, series, category, colorImage } = req.body;
    const { id } = req.params;

    await Products.update(
        { name, price, sale, description },
        { where: { id }}
    );

    const product = await Products.findByPk(id);

    if (product) {
        await product.setCategories([]);
        await product.setSeries([]);

        for (const categoryName of category) {
            const cate = await Categories.findOne({ where: { name: categoryName } });
            if (cate) {
                await product.addCategory(cate);
            };
        };

        for (const seriesName of series) {
            const serie = await Series.findOne({ where: { name: seriesName } });
            if (serie) {
                await product.addSeries(serie);
            };
        };
    };

    const existingColorImages = await ColorImages.findAll({
        where: { ProductId: id },
    });
    
    for (const existingColorImage of existingColorImages) {
        const existingColor = await Colors.findByPk(existingColorImage.ColorId);
        const colorName = existingColor.name;
        const matchingColorImage = colorImage.find((image) => image.color === colorName);
    
        if (!matchingColorImage) {
            await ColorImages.destroy({
                where: { ProductId: id, ColorId: existingColor.id },
            });

            await Stocks.destroy({
                where: { ProductId: id, ColorId: existingColor.id },
            });
        } else {
            const existingStocks = await Stocks.findAll({
                where: { ProductId: id, ColorId: existingColorImage.ColorId },
                include: [Sizes],
            });
        
            for (const existingStock of existingStocks) {
                const existingSize = existingStock.Size;
                const sizeName = existingSize.name;
                const matchingStock = matchingColorImage.stocks.find((stock) => stock.size === sizeName);
        
                if (!matchingStock) {
                  await existingStock.destroy();
                }
            }
        }
    }

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