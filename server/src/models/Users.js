const { DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('user', {

  }, {timestamps: false});
};