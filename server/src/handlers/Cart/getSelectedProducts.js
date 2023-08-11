const getUserDetails = require("../../controllers/Cart/controllGetSelectProduct")

const getSelectedProducts = async (req, res) => {
  const { id } = req.params;
try {
    const response = await getUserDetails(id);
    if (!response) {
      res.status(400).send("non-existent users");
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getSelectedProducts
