const { Sizes } = require("../../db.js");

const controllGetSize = async () => {
  const sizeList = await Sizes.findAll();
  return sizeList;
};

module.exports = controllGetSize;