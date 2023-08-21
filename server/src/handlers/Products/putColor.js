const controllPutColor = require("../../controllers/Products/controllPutColor");

const putColor = async(req, res)=>{
    try {
        const { id, name, codHex } = req.body;
        const response = await controllPutColor(id, name, codHex);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putColor;