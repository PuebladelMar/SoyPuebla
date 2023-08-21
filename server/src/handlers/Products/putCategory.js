const controllPutCategory = require("../../controllers/Products/controllPutCategory");

const putCategory = async(req, res)=>{
    try {
        const { id, name } = req.body;
        const response = await controllPutCategory(id, name );
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putCategory;
//