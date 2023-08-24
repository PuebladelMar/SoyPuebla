const deleteReviewsController = require('../../controllers/Reviews/controllDeleteReviews');

const deleteReviews = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteReviewsController(id);
    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteReviews;
