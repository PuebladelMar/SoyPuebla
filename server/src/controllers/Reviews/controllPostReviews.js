const { Reviews } = require("../../db");

const controllPostReviews = async (req) => {
  const { score, userId, description, title, productId, username, profileImage } = req.body;
  console.log(score, userId, description, title, productId, username, profileImage);
  const newReview = await Reviews.create({
    title: title,
    score: score,
    userId: userId,
    username: username,
    profileImage: profileImage,
    description: description,
    productId: productId,
  });

  return newReview;
};

module.exports = controllPostReviews;
