const { Histories, Stocks, Products, Sizes, Colors } = require("../../db");

const controllGetAllHistory = async (userId) => {
  const userHistory = await Histories.findAll();

  return userHistory
  };

  

 


module.exports = controllGetAllHistory;
