const controllDeleteUser = require("../../controllers/Users/controllDeleteUser");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await controllDeleteUser(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteUser;
