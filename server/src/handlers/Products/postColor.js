const controllerPostNewColor = require("../../controllers/Products/controllPostNewColor");

const postColor = async(req,res)=>{
    try{
        const newColor = await controllerPostNewColor();
        res.status(201).send(newColor);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postColor;
