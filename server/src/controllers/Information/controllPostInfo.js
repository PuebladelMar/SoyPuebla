const { Informations } = require("../../db");

const controllerPostInfo = async (req,res) => {
    const { email, phone, instagram, facebook, whatsapp, image } = req.body;
    const info = await Informations.create({
        email:email,
        phone:phone,
        instagram: instagram,
        facebook: facebook,
        whatsapp:whatsapp,
        image:image,
      });
      res.json({ message: 'Modificación realizada exitosamente' })

    return info;
};

module.exports = controllerPostInfo;