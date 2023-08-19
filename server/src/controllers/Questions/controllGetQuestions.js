const { Questions } = require("../../db.js");

const controllGetQuestions = async () => {
  let questions = await Questions.findAll();
  return questions;
};

module.exports = controllGetQuestions;