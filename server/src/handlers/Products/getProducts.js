const controllGetProducts = require('../../controllers/Products/controllGetProducts');

const getProducts = async(req,res)=>{
    try {
        const products = await controllGetProducts(req);
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = getProducts;