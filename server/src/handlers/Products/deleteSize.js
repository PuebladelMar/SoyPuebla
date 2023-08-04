const deleteSizeController = require('../../controllers/Products/deleteSizeController');

const deleteSize = async (req, res) => {
  const { id } = req.params;

    const result = await deleteSizeController(id);
    return res.status(200).json(result);
};

module.exports = deleteSize;
