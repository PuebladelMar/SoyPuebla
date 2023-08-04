const { Products } = require('../../db.js');

const deleteProductController = async (id) => {
  try {
   
    const product = await Products.findByPk(id);
    if (!product) {
      throw new Error("Product not found.");
    }

    await product.destroy();

    return { message: "Product deleted successfully." };
  } catch (error) {
    throw error;
  }
};

module.exports = deleteProductController;