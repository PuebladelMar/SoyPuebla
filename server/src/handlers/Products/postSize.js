const controllPostSize = require("../../controllers/Products/controllPostSize");

const postSize = async(req,res)=>{
    try {
        const { name } = req.body;
        const newSize = await controllPostSize(name);
        return res.status(201).json(newSize);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = postSize;