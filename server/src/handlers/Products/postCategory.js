const {createPostCategoryDB} =require("../../controllers/Products/controllPostCategory")



const postCategory = async(req,res)=>{
    
    try {
      const {category} = req.body
     const response= await createPostCategoryDB(category)
     res.status(201).json(response) 
   } catch (error) {
      res.status(400).send(error.message)
    }
}

module.exports = postCategory;