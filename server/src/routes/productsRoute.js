const { Router } = require('express');
const getProducts = require('../handlers/Products/getProducts');
const getProductsById = require('../handlers/Products/getProductById');
const postProducts = require('../handlers/Products/postProducts');
const postSize = require('../handlers/Products/postSize');
const postColor = require('../handlers/Products/postColor');
const getCategory = require('../handlers/Products/getCategory');
const getSeries = require('../handlers/Products/getSeries');
const postCategory = require('../handlers/Products/postCategory');
const postSerie = require('../handlers/Products/postSerie');
const deleteSeries=require("../handlers/Products/deleteSeries")
const deleteCategory=require("../handlers/Products/deleteCategory")
const deleteSize=require("../handlers/Products/deleteSize")
const deleteProduct=require("../handlers/Products/deleteProduct.js");
const getSize = require('../handlers/Products/getSize');
const postReview = require("../handlers/Reviews/postReviews");
const getReviewsById = require("../handlers/Reviews/getReviewsById");
const putProducts = require('../handlers/Products/putProducts');
const getColor = require('../handlers/Products/getColor');

const productsRouter = Router();

productsRouter.get("/", getProducts);

productsRouter.post("/", postProducts);

productsRouter.post("/size", postSize);

productsRouter.get("/color", getColor)

productsRouter.post("/color", postColor);

productsRouter.get("/category", getCategory);

productsRouter.get("/series", getSeries);

productsRouter.get("/size", getSize);

productsRouter.post("/category", postCategory);

productsRouter.post("/series", postSerie);

productsRouter.post("/review", postReview);

productsRouter.put("/:id", putProducts);

productsRouter.delete("/:id", deleteProduct)

productsRouter.delete("/size/:id", deleteSize);

productsRouter.delete("/category/:id", deleteCategory);

productsRouter.delete("/series/:id", deleteSeries);

productsRouter.get("/review/:id", getReviewsById);

productsRouter.get("/:id", getProductsById);

module.exports = productsRouter