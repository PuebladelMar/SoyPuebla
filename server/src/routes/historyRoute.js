const { Router } = require('express');
const postHistory = require('../handlers/History/postHistory');
const getHistory = require('../handlers/History/getHistory');

const historyRouter = Router();

historyRouter.get("/:userId", getHistory);

historyRouter.post("/:userId", postHistory);

module.exports = historyRouter;