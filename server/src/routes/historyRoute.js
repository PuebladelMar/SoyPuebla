const { Router } = require('express');
const postHistory = require('../handlers/History/postHistory');
const getHistory = require('../handlers/History/getHistory');
const getAllHistory = require('../handlers/History/getAllHistory');
const putHistory = require('../handlers/History/putHistory');

const historyRouter = Router();

historyRouter.get("/", getAllHistory);


historyRouter.put("/", putHistory);


historyRouter.get("/:userId", getHistory);


historyRouter.post("/:userId", postHistory);


module.exports = historyRouter;