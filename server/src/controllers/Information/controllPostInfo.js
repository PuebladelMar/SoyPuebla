const { Informations } = require("../../db");


const controllerPostInfo = async (req, res) => {
  
        const { email, phone, instagram, facebook, whatsapp, image } = req.body;
        const info = await Informations.create({
            email,
            phone,
            instagram,
            facebook,
            whatsapp,
            image,
        });

      
      
        return info
   
};

module.exports = controllerPostInfo;



