const controllPostSize = require("../../controllers/Products/controllPostSize");

const postSize = async(req,res)=>{
    try {
        const { size } = req.body;
        const newSize = await controllPostSize(size);
        return res.status(201).json(newSize);
    } catch (error) {
        res.status(400).json(error.message);
    };
};

module.exports = postSize;