const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Colors = sequelize.define(
    "Colors",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,   
      },
      codHex: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};
