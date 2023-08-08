const { Router } = require('express');
const productsRouter = require('./productsRoute')
const usersRouter = require('./usersRoute')

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);

module.exports = router