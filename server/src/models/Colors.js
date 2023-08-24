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
        set(value) {
          const words = value.toLowerCase().split(' ');
          const wordFixed = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          this.setDataValue('name', wordFixed);
        }  
      },
      codHex: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { paranoid: true }
  );
};
