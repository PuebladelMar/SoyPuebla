const { Users } = require("../../db.js");
const { Op } = require("sequelize");


const getAllUsers = async (req) => {
  const { name } = req.query;

  if (name) {
    function convertToLowercase(inputString) {
      return inputString.toLowerCase();
    };
    const user = await Users.findOne({
      where: {
        fullName: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return user;
  }else{
    const usersList = await Users.findAll();
    return usersList;
  };
};

module.exports = getAllUsers;
