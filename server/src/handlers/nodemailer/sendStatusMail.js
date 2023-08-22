const { mp_notifications } = require("../../db.js");
const {
  sendMercadoPagoStatus,
} = require("../../controllers/NodeMailer/controllerNodeMailer.js");

const sendStatusMail = async (req, res) => {
  const { emailsUsers, emailSubject} = req.body;
  try {
    await sendMercadoPagoStatus(emailsUsers, emailSubject);
    res.status(201).send(`Email de status enviado`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = sendStatusMail;
