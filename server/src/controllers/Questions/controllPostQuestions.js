const { Questions } = require("../../db");

const controllPostReviews = async (req) => {
  const {questions,  answers } = req.body;
  const newQuestions = await Questions.create({
    questions: questions,
    answers: answers,
   
  });

  return newQuestions;
};

module.exports = controllPostReviews;