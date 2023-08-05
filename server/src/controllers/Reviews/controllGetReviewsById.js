const { Reviews, ProductReviews } = require("../../db");

const getReviewsById = async (id) => {
  const reviewsByProduct = await ProductReviews.findAll({
    where: { ProductId: id },
  });

  const response = await Promise.all(
    reviewsByProduct.map(async (review) => {
      const { ReviewId } = review.dataValues;
      return await Reviews.findOne({ where: { id: ReviewId } });
    })
  );

  return response;
};

module.exports = getReviewsById;
