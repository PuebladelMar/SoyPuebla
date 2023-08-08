const controllPutUser = require("../../controllers/Users/controllPutUser");

const putUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, image } = req.body;
  try {
    const user = await controllPutUser(id, { name, email, password, image });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putUser;