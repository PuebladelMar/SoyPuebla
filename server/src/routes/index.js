const { Router } = require('express');
const productsRouter = require('./productsRoute')

const router = Router();

router.use("/products", productsRouter);

module.exports = router