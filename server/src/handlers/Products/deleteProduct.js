const deleteProductController = require('../../controllers/Products/deleteProductController');

const deleteProduct = async (req, res) => {
  try{
    const { id } = req.params;
    const result = await deleteProductController(id);
    return res.status(200).json(result);
  }catch(error){
    res.status(400).json({error: error.message});
  };
};

module.exports = deleteProduct;
