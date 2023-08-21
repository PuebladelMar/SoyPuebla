const { Router } = require('express');
const postCreatePreference = require('../handlers/MercadoPago/postCreatePreference');
const getFeedback = require('../handlers/MercadoPago/getFeedback');
const getSuccess = require('../handlers/MercadoPago/getSuccess');
const getFailure = require('../handlers/MercadoPago/getFailure');
const getPending = require('../handlers/MercadoPago/getPending');
const mpRouter = Router();

mpRouter.post("/create_preference", postCreatePreference);

mpRouter.get("/feedback", getFeedback);

mpRouter.get("/success", getSuccess);

mpRouter.get("/failure", getFailure);

mpRouter.get("/pending", getPending);

module.exports = mpRouter;