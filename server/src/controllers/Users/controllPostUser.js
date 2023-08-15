const { Users } = require("../../db.js");
const { sendRegisterMailNotify } = require ("../../controllers/NodeMailer/controllerNodeMailer");

const controllPostUser = async (req) => { 
  const { clerkId, user } = req.body;

  const [newUser, created] = await Users.findOrCreate({
    where: {
      clerkId,
    },
  });

  const sendEmailNewUser = async () => {
    const emailsUsers = user.emailAddresses[0].emailAddress;
    const emailSubject = "Suscripción a SOY PUEBLA"
    await sendRegisterMailNotify(emailSubject, emailsUsers);
  };

  if (created) sendEmailNewUser();
  
  return newUser;
};

module.exports = controllPostUser;