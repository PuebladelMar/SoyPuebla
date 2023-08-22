const controllPostHistory = require("../../controllers/History/controllPostHistory");

const postHistory = async (req, res) => {
  const { state } = req.body;
  const { userId } = req.params;
  try {
    const response = await controllPostHistory(userId, state);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postHistory;
