const { Informations } = require("../../db");

const getInfoController=async()=>{

    const latestInfo = await Informations.findOne({
        order: [['createdAt', 'DESC']],
      });

      return latestInfo

}

module.exports=getInfoController