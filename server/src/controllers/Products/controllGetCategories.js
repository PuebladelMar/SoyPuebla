const { Categories} = require("../../db.js");

const getAllCategories = async () => {
  const categoriesList = await Categories.findAll();
  console.log(categoriesList);
  return categoriesList;
};

module.exports = getAllCategories;
