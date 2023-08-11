const { Router } = require('express');
const postCreatePreference = require('../handlers/MercadoPago/postCreatePreference');
const getFeedback = require('../handlers/MercadoPago/getFeedback');
const postSelectedProducts = require('../handlers/Cart/postSelectProducts')
const getSelectedProducts = require("../handlers/Cart/getSelectedProducts")
const mpRouter = Router();

mpRouter.post("/create_preference", postCreatePreference);

mpRouter.get("/feedback", getFeedback);

mpRouter.post("/postNewProduct", postSelectedProducts);

mpRouter.get("/cart/:id", getSelectedProducts);

module.exports = mpRouter;