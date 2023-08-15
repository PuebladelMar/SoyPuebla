const { Colors } = require('../../db');

const controllerPostNewColor = async (name, codHex) => {
    const [newColor, created] = await Colors.findOrCreate({
        where: { name },
        defaults: { codHex }
    });

    if (!created)throw new Error("Color already exists");

    return newColor;
};

module.exports = controllerPostNewColor;

