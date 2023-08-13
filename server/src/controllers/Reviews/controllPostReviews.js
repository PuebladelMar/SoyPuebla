const { Reviews, ProductReviews } = require("../../db");

const controllPostReviews = async (req) => {
  console.log(req);
  // const { score, title, userId, productId, description } = req.body;
  const { score, title, userId, description } = req.body;

  const newReview = await Reviews.create({
    score,
    title,
    userId,
    // productId,
    description,
  });
  // const newProdutcReview = await ProductReviews.create({
    // ProductId: productId,
    // ReviewId: newReview.id,
  // });

  return newReview;
};

module.exports = controllPostReviews;
