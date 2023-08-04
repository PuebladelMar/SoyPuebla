const { Products } = require('../../db.js');

const deleteProductController = async (id) => {
    const product = await Products.findByPk(id);
    if (!product) {
      throw new Error("Product not found.");
    }
    await product.destroy();
    return { message: "Product deleted successfully." };
};

module.exports = deleteProductController;
