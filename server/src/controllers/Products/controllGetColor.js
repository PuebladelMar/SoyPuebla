const { Colors } = require('../../db');

const controllGetColor = async()=>{
    const allColors = await Colors.findAll();

    return allColors;
};

module.exports = controllGetColor;