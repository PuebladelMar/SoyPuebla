const controllGetHistory = require("../../controllers/History/controllGetHistory");

const getHistory = async(req, res)=>{
    const { userId } = req.params;
    try {
        const response = controllGetHistory(userId);
        if(!response)return res.status(404).json({error: "Historial no encontrado"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = getHistory;