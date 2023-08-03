const { Categories } = require("../../db");

const createPostCategoryDB = async (name) => {
    const [newCategory, created] = await Categories.findOrCreate({where: { name }});
    if(!created)throw Error ("category already existing");
    return newCategory;
};

module.exports = createPostCategoryDB;