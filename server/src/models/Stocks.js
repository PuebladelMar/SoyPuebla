const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Stocks = sequelize.define(
    'Stocks', 
    {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    amount:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate:{
        min: 0
      }
    }
  },{ paranoid: true });
};