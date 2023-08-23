const nodemailer = require("nodemailer");
const emailApiKey = "tzxlsdlrobbymssj";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "puebladelmar2023@gmail.com",
    pass: emailApiKey,
  },
});

const controllerNodeMailer = async (emailSubject, emailsUsers) => {
  try {
    await transporter.sendMail({
      from: '"SOY_PUEBLA" : puebladelmar2023@gmail.com',
      to: emailsUsers,
      subject: emailSubject,
      html: "<b>Espacio para el título</b> <p>Espacio para el texto</p>",
    });
    console.log(`Correo enviado a ${emailsUsers}`);
  } catch (error) {
    throw new Error("Error al enviar el correo electrónico");
  }
};

const sendRegisterMailNotify = async (emailSubject, emailsUsers) => { 
  try {  
    await transporter.sendMail({
      from: '"SOY_PUEBLA" : puebladelmar2023@gmail.com',
      to: emailsUsers,
      subject: emailSubject,
      html: "<b>Bienvenida a Soy Puebla</b> <p>Gracias por suscribirte en nuestra tienda virtual, te avisaremos cuando tu prenda este disponible</p>",
    });
    
    console.log(`Correo de registro enviado a ${emailsUsers}`);
  } catch (error) {
    throw new Error("Error al enviar el correo electrónico de registro");
  }
};

const sendStockNotification = async (emailsUsers) => {
  try {
    await transporter.sendMail({
      from: '"SOY_PUEBLA" : puebladelmar2023@gmail.com',
      to: emailsUsers,
      subject: "¡Tu prenda favorita ya se encuentra disponible",
      html: "<b>Bienvenida a Soy Puebla</b> <p>Queremos que sepas que trabajamos para ti, por esto queremos informarte que tu producto ya se encuentra disponible, visita nuestra página web para que puedas adquirirlo</p>",
    });
    console.log(`Notificación de stock enviado a ${emailsUsers}`);
  } catch (error) {
    throw new Error("Error al enviar el correo electrónico de notificación de stock");
  }
};

const sendMercadoPagoStatus = async (emailsUsers, emailSubject) => {
  try {
    await transporter.sendMail({
      from: '"SOY_PUEBLA" : puebladelmar2023@gmail.com',
      to: emailsUsers,
      subject: emailSubject,
      html: "<b>Bienvenida a Soy Puebla</b> <p>En Soy Puebla trabajamos para ti, por esto queremos informarte el estado de tu compra.</p> <p>Si deseas conocer más al respecto no dudes en contactarte a nuestra línea telefónica xxxxxx.</p>",
    });
  } catch (error) {
    throw new Error("Error al enviar el correo electrónico de estado de compra");
  }
};

module.exports = { controllerNodeMailer, sendRegisterMailNotify, sendStockNotification, sendMercadoPagoStatus };

