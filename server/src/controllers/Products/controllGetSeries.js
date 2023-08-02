const { Series } = require("../../db.js");

const getAllSeries = async () => {
  const seriesList = await Series.finAll();
  return seriesList;
};

module.exports = {
  getAllSeries,
};
