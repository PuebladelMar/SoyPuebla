const { Router } = require('express');
const postCreatePreference = require('../handlers/MercadoPago/postCreatePreference');
const getFeedback = require('../handlers/MercadoPago/getFeedback');
const mpRouter = Router();

mpRouter.post("/create_preference", postCreatePreference);

mpRouter.get("/feedback", getFeedback);

module.exports = mpRouter;