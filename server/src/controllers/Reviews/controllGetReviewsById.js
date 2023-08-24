const { Reviews } = require('../../db');

const controllGetReviewsById = async (id) => {
  const reviewsByProduct = await Reviews.findAll({
    where: { productId: id },
  });

  return reviewsByProduct;
};

module.exports = controllGetReviewsById;
