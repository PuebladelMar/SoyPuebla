const getAllCategories= require("../../controllers/Products/controllGetCategories")

const getCategory = async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = getCategory;
