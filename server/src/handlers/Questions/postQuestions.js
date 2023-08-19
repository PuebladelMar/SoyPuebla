const controllPostQuestions = require("../../controllers/Questions/controllPostQuestions");


const postQuestions = async (req, res) => {
  try {
    const newQuestions = await controllPostQuestions(req);
    res.status(201).json([newQuestions]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

};

module.exports = postQuestions;