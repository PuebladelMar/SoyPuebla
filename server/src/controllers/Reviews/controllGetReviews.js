const { Reviews } = require("../../db.js");

const controllGetReviews = async (req) => {
  const allReviews = await Reviews.findAll();

  return allReviews;
};

module.exports = controllGetReviews;
