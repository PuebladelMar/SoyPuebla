const { Router } = require('express');
const postCart = require('../handlers/Cart/postCart');
const getCart = require("../handlers/Cart/getCart");
const deleteCart=require("../handlers/Cart/deleteCart")
const deleteCartUser=require("../handlers/Cart/deleteCartUser")
const cartRouter = Router();

cartRouter.post("/", postCart);

cartRouter.delete("/:id", deleteCart)

cartRouter.delete("/user/:id", deleteCartUser)

cartRouter.get("/:id", getCart);

module.exports = cartRouter;