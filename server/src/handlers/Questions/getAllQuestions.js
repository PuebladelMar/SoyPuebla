const controllGetQuestions = require('../../controllers/Questions/controllGetQuestions');

const getQuestions = async(req,res)=>{

    try {
        const reviews = await controllGetQuestions();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = getQuestions;