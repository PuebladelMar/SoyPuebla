const { Series } = require("../../db.js");

const postNewSerie = async (serie) => {
  const [newSerie, created] = await Series.findOrCreate({where: {serie}});
  if(!created)throw Error("size already exists");
  return newSerie;
};

module.exports = {
  postNewSerie,
};
