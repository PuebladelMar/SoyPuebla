const getUserById = require("../../controllers/Users/controllGetUserById");

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getUserById(id);
    if (!response) {
      res.status(400).send("non-existent product");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getUser;
