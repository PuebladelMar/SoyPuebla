const {
  controllerNodeMailer,
} = require("../../controllers/NodeMailer/controllerNodeMailer");

const postEmail = async (req, res) => {
  const { emailSubject, emailsUsers } = req.body;
  try {
    controllerNodeMailer(emailSubject, emailsUsers);
    res.status(201).send(`email enviado con éxito al usuario a ${emailsUsers}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postEmail;
