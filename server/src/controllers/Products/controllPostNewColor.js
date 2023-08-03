const { Colors } = require('../../db');
const { colorPalete } = require('../../utils/colorsPalet');

const controllerPostNewColor = async() =>{
    const storedColors = await Colors.findAll();
    if(storedColors.length) return storedColors;
    const colorsMap = await Promise.all(
        colorPalete.map(async (color)=>{
            return await Colors.create({name: color.name, codHex: color.codHex});
        })
    );
    return colorsMap;
};

module.exports = controllerPostNewColor;

