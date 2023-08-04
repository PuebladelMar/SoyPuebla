const { Series } = require("../../db.js");

const postNewSerie = async (name) => {
  const [newSerie, created] = await Series.findOrCreate({where: {name}});
  if(!created)throw Error("size already exists");
  return newSerie;
};

module.exports = postNewSerie
