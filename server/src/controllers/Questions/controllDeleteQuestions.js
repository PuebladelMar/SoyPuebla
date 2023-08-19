const { Questions } = require("../../db.js");

const controllDeleteQuestions = async (id) => {
  const questions = await Questions.findByPk(id);
  if (!questions) {
    throw new Error("Questions not found.");
  }
  await questions.destroy();
  return { message: "questions deleted successfully." };
};

module.exports = controllDeleteQuestions;