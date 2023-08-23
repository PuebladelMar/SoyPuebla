const { Reviews } = require('../../db.js');

const deleteReviewsController = async (id) => {
  const reviews = await Reviews.findByPk(id);
  if (!reviews) {
    throw new Error('Reviews not found.');
  }

  await reviews.destroy();

  return { message: 'Reviews deleted successfully.' };
};

module.exports = deleteReviewsController;
