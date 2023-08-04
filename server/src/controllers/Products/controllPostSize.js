const { Sizes } = require("../../db");

const controllPostSize = async(name)=>{
    const [newSize, created] = await Sizes.findOrCreate({where: {name}});
    if(!created)throw Error('size already exists');
    return newSize;
};

module.exports = controllPostSize;