const { Sizes } = require("../../db");

const controllPostSize = async(size)=>{
    const [newSize, created] = await Sizes.findOrCreate({where: {size}});
    if(!created)throw Error('size already exists');
    return newSize;
};

module.exports = controllPostSize;