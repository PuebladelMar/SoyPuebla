const { Router } = require('express');
const postCreatePreference = require('../handlers/MercadoPago/postCreatePreference');
const getFeedback = require('../handlers/MercadoPago/getFeedback');
const getSuccess = require('../handlers/MercadoPago/getSuccess');
const getFailure = require('../handlers/MercadoPago/getFailure');
const mpRouter = Router();

mpRouter.post("/create_preference", postCreatePreference);

mpRouter.get("/feedback", getFeedback);

mpRouter.get("/success", getSuccess);

mpRouter.get("/failure", getFailure);

module.exports = mpRouter;