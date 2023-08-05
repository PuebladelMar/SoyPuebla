const { Categories} = require("../../db.js");

const controllGetSize = async () => {
  const categoriesList = await Categories.findAll();
  return categoriesList;
};

module.exports = controllGetSize;