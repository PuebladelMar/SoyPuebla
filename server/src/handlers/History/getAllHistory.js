const controllGetAllHistory = require("../../controllers/History/controlGetAllHistory");

const getAllHistory = async (req, res) => {
 
  try {
    const response = await controllGetAllHistory();
    if (!response)
      return res.status(404).json({ error: "Historial no encontrado" });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllHistory;
