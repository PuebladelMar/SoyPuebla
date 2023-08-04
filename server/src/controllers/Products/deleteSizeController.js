const { Sizes } = require('../../db.js');

const deleteSizeController = async (id) => {
    const Size = await Sizes.findByPk(id);
    if (!Size) {
      throw new Error("Size not found.");
    }

    await Size.destroy();

    return { message: "Size deleted successfully." };
};

module.exports = deleteSizeController;
