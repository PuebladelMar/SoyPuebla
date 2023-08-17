const { Reviews} = require("../../db");

const getReviewsById = async (id) => {
  const reviewsByProduct = await Reviews.findAll({
    where: { productId: id },
  });



  return reviewsByProduct;
};

module.exports = getReviewsById;
