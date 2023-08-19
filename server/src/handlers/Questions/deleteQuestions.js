const controllDeleteQuestions = require("../../controllers/Questions/controllDeleteQuestions");

const deleteQuestions = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await controllDeleteQuestions(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteQuestions;
