const { Router } = require('express');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const mpRouter = require('./mpRoute');
const nodemailer = require('./nodemailer');
const cartRouter = require('./cartRoute');
const historyRouter = require('./historyRoute');
const infoRouter=require("./infoRoute")
const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/mp", mpRouter);
router.use("/notify", nodemailer);
router.use("/cart", cartRouter);
router.use("/history", historyRouter);
router.use("/information", infoRouter)

module.exports = router;