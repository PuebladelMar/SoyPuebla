const { Router } = require('express');
const postHistory = require('../handlers/History/postHistory');

const historyRouter = Router();

historyRouter.post("/:userId", postHistory);

module.exports = historyRouter;