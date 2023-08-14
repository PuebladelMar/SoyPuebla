const { Reviews } = require('../../db');

const controllPostReviews = async (req) => {
  try {
    const { score, userId, description, title, productId } =
      req.body.userComment;
    console.log(req.body.userComment);

    const newReview = await Reviews.create({
      title,
      score,
      userId,
      description,
      productId,
    });

    return newReview;
  } catch (error) {
    throw new Error('Error al crear la reseña: ' + error.message);
  }
};

module.exports = controllPostReviews;
