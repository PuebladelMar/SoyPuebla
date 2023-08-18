const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
sequelize.define(
    "ColorImages",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      images: {
        type: DataTypes.JSON,
        allowNull: false
      }
    },
     { timestamps: true, paranoid: true }
  );
};