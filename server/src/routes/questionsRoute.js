const { Router } = require('express');
const postQuestions = require("../handlers/Questions/postQuestions");
const getAllQuestions = require("../handlers/Questions/getAllQuestions");
const deleteQuestions=require("../handlers/Questions/deleteQuestions")


const questionsRouter = Router();


questionsRouter.post("/", postQuestions);

questionsRouter.get("/", getAllQuestions);

questionsRouter.delete("/:id", deleteQuestions);


module.exports = questionsRouter;