const getReviewsById = require("../../controllers/Reviews/controllGetReviewsById");

const getReviews = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getReviewsById(id);
    if (!response) {
      res.status(400).send("non-existent review");
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getReviews;
