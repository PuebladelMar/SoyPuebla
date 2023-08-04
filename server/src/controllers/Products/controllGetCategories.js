const { Categories} = require("../../db.js");

const getAllCategories = async () => {
  const categoriesList = await Categories.findAll();
  return categoriesList;
};

module.exports = getAllCategories;
