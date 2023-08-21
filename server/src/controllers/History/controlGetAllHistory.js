const { Histories, Stocks, Products, Sizes, Colors, Users, sequelize } = require("../../db");
const { Op } = require("sequelize");

const controllGetAllHistory = async () => {
  try {
    const userHistory = await Histories.findAll();

    const stockIds = userHistory.map((user) => user.StockId);

    const stockList = await Stocks.findAll({
      where: {
        id: {
          [Op.in]: stockIds,
        },
      },
      attributes: ['id', 'ProductId', 'ColorId', 'SizeId'],
    });

    const stockAttributesMap = {};

    await Promise.all(stockList.map(async (stock) => {
      const product = await Products.findOne({
        where: {
          id: stock.ProductId,
        },
        attributes: ['name']
      });

      const color = await Colors.findOne({
        where: {
          id: stock.ColorId,
        },
        attributes: ['name'],
      });

      const size = await Sizes.findOne({
        where: {
          id: stock.SizeId,
        },
        attributes: ['name'],
      });

      stockAttributesMap[stock.id] = {
        product: product ? product.name : '',
        color: color ? color.name : '',
        size: size ? size.name : '',
      };
    }));

    const userIds = userHistory.map((user) => user.UserId);

    const userAttributes = await Users.findAll({
      where: {
        id: {
          [Op.in]: userIds,
        },
      },
      attributes: ['id', 'emailAddress', 'userRole', 'banUser', 'fullName'],
    });

    const userMap = userAttributes.reduce((acc, user) => {
      acc[user.id] = user.dataValues;
      return acc;
    }, {});

    const result = userHistory.map((history) => ({
      ...history.dataValues,
      attributes: {
        ...stockAttributesMap[history.StockId],
        ...userMap[history.UserId],
      },
    }));

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}; 

module.exports = controllGetAllHistory;
