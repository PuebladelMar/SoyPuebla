const controllPostProduct= require("../../controllers/Products/controllPostProduct");

const postProducts = async(req, res)=>{
    try{
        const newProduct = await controllPostProduct(req);
        res.status(201).send(newProduct);
    }catch (error) {
        res.status(400).send(error.message)
    };
}

module.exports = postProducts;

