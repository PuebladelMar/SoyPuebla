const controllGetReviews = require('../../controllers/Reviews/controllGetReviews');

const getReviews = async(req,res)=>{

    try {
        const reviews = await controllGetReviews(req);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = getReviews;