const controllPostHistory = require("../../controllers/History/controllPostHistory");

const postHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    await controllPostHistory(userId);
    res.status(200).json({ message: "Historial creado existosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postHistory;
