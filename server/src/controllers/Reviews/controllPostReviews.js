const { Reviews } = require('../../db');

const controllPostReviews = async (req) => {
  const { score, title, userId, productId, description,  } = req.body;
  const newReview = await Reviews.create({ score, title, userId, productId, description });
  return newReview;
};

module.exports = controllPostReviews;