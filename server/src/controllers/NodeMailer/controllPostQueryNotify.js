const { StockNotifies, Stocks } = require("../../db");
const cron = require('node-cron');
const { sendRegisterMailNotify, sendStockNotification } = require("./controllerNodeMailer");

const controllPostQueryNotify = async (req) => {
  try {
    const { user_email, stock_id } = req.body;

    const [newQuery, created] = await StockNotifies.findOrCreate({
      where: {
        email: user_email,
        StockId: stock_id,
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

const checkAndNotifyStockChange = async () => {
  try {
    const stockNotifies = await StockNotifies.findAll({
      include: [Stocks],
    });

    for (const notify of stockNotifies) {
      if (notify.Stocks.amount > 0) {
        await sendStockNotification(notify.email);
        await notify.destroy();
      }
    }
  } catch (error) {
    console.error('Error in cron job:', error);
  }
};

cron.schedule('* * * * *', checkAndNotifyStockChange);

module.exports = { controllPostQueryNotify };
