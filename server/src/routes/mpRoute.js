const { Router } = require('express');
const postCreatePreference = require('../handlers/MercadoPago/postCreatePreference');
const getFeedback = require('../handlers/MercadoPago/getFeedback');
const postSelectedProducts = require('../handlers/Cart/postSelectProducts')

const mpRouter = Router();

mpRouter.post("/create_preference", postCreatePreference);

mpRouter.get("/feedback", getFeedback);

mpRouter.post("/postNewProduct", postSelectedProducts);

module.exports = mpRouter;