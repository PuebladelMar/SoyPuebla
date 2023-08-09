const getFeedback = async(res, req) => {
    res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
};

module.exports = getFeedback;