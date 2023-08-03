const { DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Users', {

  }, {timestamps: false});
};