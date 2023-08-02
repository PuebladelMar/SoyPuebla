const {
  postNewSerie,
} = require("../.././controllers/Products/controllPostSerie.js");

const postSerie = async (req, res) => {
  const { serie } = req.body;
  try {
    const newSerie = await postNewSerie(serie);
    return res.status(201).json(newSerie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = postSerie;
