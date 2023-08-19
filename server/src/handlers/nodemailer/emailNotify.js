const { EmailNotify } = require("../../db.js");
const {
  sendRegisterMailNotify,
} = require("../../controllers/NodeMailer/controllerNodeMailer");

const postEmail = async (req, res) => {
  const { emailSubject, emailsUsers } = req.body;
 
  try {
    const [user, created] = await EmailNotify.findOrCreate({
      where: { user_email: emailsUsers }
    });
    
    if (created) {
      sendRegisterMailNotify(emailSubject, emailsUsers);
      res.status(201).send(`email enviado con éxito al usuario a ${emailsUsers}`);
      console.log('Nuevo usuario creado');
    } else {
      res.status(201).json({ error: "El usuario ya se encuentra suscrito" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postEmail;
