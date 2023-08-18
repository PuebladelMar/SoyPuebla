const { Router } = require('express');
const getInfo = require('../handlers/Information/getInfo');
const postInfo = require('../handlers/Information/getInfo');
const infoRouter = Router();


infoRouter.get("/", getInfo);

infoRouter.post("/", postInfo);