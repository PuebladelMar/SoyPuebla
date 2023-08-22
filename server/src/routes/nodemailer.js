const { Router } = require("express");
const emailNotify = require("../handlers/nodemailer/emailNotify");
const postQueryNotify = require("../handlers/nodemailer/postQueryNotify");
const sendStatusMail = require("../handlers/nodemailer/sendStatusMail");

const nodemailer = Router();

nodemailer.post("/email", emailNotify);
nodemailer.post("/stockNotify", postQueryNotify);
nodemailer.post("/status", sendStatusMail);

module.exports = nodemailer;
