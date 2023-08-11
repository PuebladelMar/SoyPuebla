const { Router } = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const mpRouter = require('./mpRoute');
const nodemailer = require('./nodemailer');

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/mp", mpRouter);
router.use("/notify", nodemailer);

module.exports = router;