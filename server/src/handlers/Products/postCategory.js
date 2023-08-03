const createPostCategoryDB = require("../../controllers/Products/controllPostCategory");

const postCategory = async(req,res)=>{
  try {
    const { name } = req.body;
    const response = await createPostCategoryDB(name);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

module.exports = postCategory;