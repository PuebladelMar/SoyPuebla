const { Router } = require('express');
const emailNotify = require('../handlers/nodemailer/emailNotify');
const postQueryNotify = require('../handlers/nodemailer/postQueryNotify');

const nodemailer = Router();

nodemailer.post("/email", emailNotify);
nodemailer.post("/stockNotify", postQueryNotify);

module.exports = nodemailer;