const { DataTypes, Sequelize } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Users', {
    // set(value) {
    //   const words = value.toLowerCase().split(' ');
    //   const wordFixed = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    //   this.setDataValue('name', wordFixed);
    // }
  }, {timestamps: false});
};