const controllGetColor = require("../../controllers/Products/controllGetColor");


const getColor = async(req, res)=>{
    try {
        const response = await controllGetColor();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = getColor