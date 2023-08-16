const controllerPostNewColor = require("../../controllers/Products/controllPostNewColor");

const postColor = async(req,res)=>{
    const { name, codHex } = req.body;
    try{
        const newColor = await controllerPostNewColor(name, codHex);
        res.status(201).send(newColor);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postColor;
