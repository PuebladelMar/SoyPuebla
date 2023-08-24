const getAllUsers = require("../../controllers/Users/controllGetUser");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers(req);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUsers;
