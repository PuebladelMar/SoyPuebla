const { Router } = require('express');
const postCart = require('../handlers/Cart/postCart');
const getCart = require("../handlers/Cart/getCart");
const deleteCart=require("../handlers/Cart/deleteCart")
const postProductFavorites = require("../handlers/Cart/postFav");
const deleteFav=require("../handlers/Cart/deleteFav")
const deleteCartUser=require("../handlers/Cart/deleteCartUser")
const getAllFavorite=require("../handlers/Cart/getAllFav")
const cartRouter = Router();

cartRouter.post("/", postCart);

cartRouter.post("/fav", postProductFavorites);

cartRouter.get("/fav/:id", getAllFavorite);

cartRouter.delete("/fav", deleteFav)

cartRouter.delete("/:id", deleteCart)

cartRouter.delete("/user/:id", deleteCartUser)

cartRouter.get("/:id", getCart);

module.exports = cartRouter;