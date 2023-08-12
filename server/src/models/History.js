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
  },{ timestamps: false });
};