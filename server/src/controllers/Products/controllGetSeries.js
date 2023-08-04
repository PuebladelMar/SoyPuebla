const { Series } = require("../../db.js");

const getAllSeries = async () => {
  const seriesList = await Series.findAll();
  return seriesList;
};

module.exports = getAllSeries;
