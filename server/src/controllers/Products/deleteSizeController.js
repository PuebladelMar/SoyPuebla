const { Sizes } = require('../../db.js');

const deleteSizeController = async (id) => {
  try {
   
    const Size = await Sizes.findByPk(id);
    if (!Size) {
      throw new Error("Size not found.");
    }

    await Size.destroy();

    return { message: "Size deleted successfully." };
  } catch (error) {
    throw error;
  }
};

module.exports = deleteSizeController;