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
const postReview = require('../handlers/Reviews/postReviews');

const productsRouter = Router();

productsRouter.get("/", getProducts);

productsRouter.post("/", postProducts);

productsRouter.post("/size", postSize);

productsRouter.post("/color", postColor);

productsRouter.get("/category", getCategory);

productsRouter.get("/series", getSeries);

productsRouter.post("/category", postCategory);

productsRouter.post("/serie", postSerie);

productsRouter.post("/review", postReview);

productsRouter.get("/:id", getProductsById);

module.exports = productsRouter