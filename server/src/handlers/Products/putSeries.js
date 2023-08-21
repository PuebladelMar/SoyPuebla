const controllPutSeries = require("../../controllers/Products/controllPutSeries");

const putSeries = async(req, res)=>{
    try {
        const { id, name, image } = req.body;
        const response = await controllPutSeries(id, name, image );
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

module.exports = putSeries;
//