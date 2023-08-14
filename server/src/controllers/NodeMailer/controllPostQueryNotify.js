const { EmailNotify } = require("../../db");
const { sendRegisterMailNotify } = require("./controllerNodeMailer");

const controllPostQueryNotify = async (req) => {
  try {
    const { user_email, stock_id } = req.body;

    const [newQuery, created] = await EmailNotify.findOrCreate({
      where: {
        user_email: user_email,
        stock_id: stock_id,
      },
    });

    const sendRegisterMail = async () => {
      const emailsUsers = user_email;
      const emailSubject = "Ahora te avisaremos cuando esté disponible: SOY PUEBLA";
      await sendRegisterMailNotify(emailSubject, emailsUsers);
    };

    if (created) {
      await sendRegisterMail();
    }

    return newQuery;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { controllPostQueryNotify };
