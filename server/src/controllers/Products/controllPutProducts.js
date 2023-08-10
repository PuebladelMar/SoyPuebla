const { Products, Colors, Sizes, Categories, Series, Stocks } = require("../../db");

const controllPutProducts = async(req)=>{
    const { name, price, mainImage, image, sale, description, series, categories, variations } = req.body;
    const { id } = req.params;

    await Products.update(
        { name, price, mainImage, image, sale, description },
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

    for (const variation of variations) {
        const { color, size, amount } = variation;

        const [findedColor, findedSize] = await Promise.all([
            Colors.findOrCreate({ where: { name: color }}),
            Sizes.findOrCreate({ where: { name: size }}),
        ]);

        const [stock, created] = await Stocks.findOrCreate({
            where: {
                ProductId: id,
                ColorId: findedColor[0].id,
                SizeId: findedSize[0].id,
            },
            defaults: { amount },
        });
    
        if (!created) {
            await stock.update({ amount });
        }

    }

    return "Product updated successfully";
};

module.exports = controllPutProducts;