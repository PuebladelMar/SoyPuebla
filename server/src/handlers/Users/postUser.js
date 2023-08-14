const controllPostUser = require("../../controllers/Users/controllPostUser");

const postUser = async (req, res) => {
  try {
    const newUser = await controllPostUser(req);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postUser;
