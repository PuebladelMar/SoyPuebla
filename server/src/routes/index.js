const { Router } = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const mpRouter = require('./mpRoute');

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/mp", mpRouter);

module.exports = router;