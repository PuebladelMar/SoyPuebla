const postNewSerie = require("../.././controllers/Products/controllPostSerie.js");

const postSerie = async (req, res) => {
  const { name, image  } = req.body;
  try {
    const newSerie = await postNewSerie(name , image );
    return res.status(201).json(newSerie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = postSerie;
