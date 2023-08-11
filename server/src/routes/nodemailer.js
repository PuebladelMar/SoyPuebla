const { Router } = require('express');
const emailNotify = require('../handlers/nodemailer/emailNotify');

const nodemailer = Router();

nodemailer.post("/email", emailNotify);

module.exports = nodemailer;