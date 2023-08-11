const { Router } = require('express');
const postCart = require('../handlers/Cart/postCart');
const getCart = require("../handlers/Cart/getCart");

const cartRouter = Router();

cartRouter.post("/", postCart);

cartRouter.get("/:id", getCart);

module.exports = cartRouter;