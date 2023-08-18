const controllerPostInfo = require("../../controllers/Information/controllPostInfo");

const postInfo = async(req,res)=>{
  
    try{
        const newInfo = await controllerPostInfo();
        res.status(201).send(newInfo);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postInfo;