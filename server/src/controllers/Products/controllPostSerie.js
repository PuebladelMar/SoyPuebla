const { Series } = require("../../db.js");

const postNewSerie = async (name, image) => {
  const [newSerie, created] = await Series.findOrCreate({where: { name }, defaults: { image }, }, );
  if(!created)throw Error("size already exists");
  return newSerie;
};

module.exports = postNewSerie
