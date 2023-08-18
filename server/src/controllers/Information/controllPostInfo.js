const { Informations } = require("../../db");

const createPostCategoryDB = async () => {
    
    const info = await Informations.create();

    return info;
};

module.exports = createPostCategoryDB;