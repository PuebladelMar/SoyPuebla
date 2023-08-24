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
    state:{
      type: DataTypes.ENUM('approved', 'rejected', 'pending'),
    },
    StockId:{
      type: DataTypes.UUID,
      allowNull: false,
      unique: false
    },
    UserId:{
      type: DataTypes.UUID,
      allowNull: false,
      unique: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    }
  },{ timestamps: true, paranoid: true  });
};