const { Reviews } = require("../../db");

const controllPostReviews = async (req) => {
  const { score, userId, description, productId, fullName } = req.body;
  console.log(fullName);
  const newReview = await Reviews.create({
    score: score,
    userId: userId,
    fullName: fullName,
    description: description,
    productId: productId,
  });

  return newReview;
};

module.exports = controllPostReviews;
