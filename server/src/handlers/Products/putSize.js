const controllPutSize = require("../../controllers/Products/controlPutSize");

const putSize = async(req, res)=>{
    try {
        const { id, name } = req.body;
        const response = await controllPutSize(id, name );
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putSize;