const { EmailNotify } = require("../../db.js");
const {
  sendRegisterMailNotify,
} = require("../../controllers/NodeMailer/controllerNodeMailer");

const postEmail = async (req, res) => {
  const { emailSubject, emailsUsers } = req.body;

  try {
    const [user, created] = await EmailNotify.findOrCreate({
      where: { user_email: emailsUsers },
    });

    if (created) {
      sendRegisterMailNotify(emailSubject, emailsUsers);
      res.status(201).send(`Suscripcion exitosa`);
    } else {
      res.status(201).json({ error: "Ya te encuentras suscrita" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postEmail;
