const controllPutColor = require("../../controllers/Products/controllPutProducts");

const putColor = async(req, res)=>{
    try {
        const response = await controllPutColor(req);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putColor;