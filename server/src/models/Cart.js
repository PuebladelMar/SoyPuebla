const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Cart = sequelize.define(
    'Cart', 
    {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate:{
        min: 0
      }
    }
  },{ paranoid: true });
};