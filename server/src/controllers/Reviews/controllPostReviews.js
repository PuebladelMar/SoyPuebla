const { Reviews } = require('../../db');

const controllPostReviews = async (req) => {
  const { score, title, user, description } = req.body;

  const newReview = await Reviews.create({ score, title, user, description });

  return newReview;
};

module.exports = controllPostReviews;