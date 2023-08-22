const controllPutProduct = require("../../controllers/Products/controllPutProducts");

const putProducts = async(req, res)=>{
    try {
        const response = await controllPutProduct(req);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putProducts;
//