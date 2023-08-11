const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Carts = sequelize.define(
    'Carts', 
    {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    quantity:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate:{
        min: 0
      }
    }
  },{ paranoid: true });
};