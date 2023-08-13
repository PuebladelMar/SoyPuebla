const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Histories = sequelize.define(
    'Histories', 
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
    },
    unitPrice:{
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      validate:{
        min: 0
      }
    },
  },{ timestamps: false });
};