const controllPutHistory = require("../../controllers/History/controllPutHistory");

const putHistory = async(req, res)=>{
    try {
        const { id, state } = req.body;
        const response = await controllPutHistory(id, state );
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putHistory;
