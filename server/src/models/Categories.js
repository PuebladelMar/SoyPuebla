const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
sequelize.define(
    "Categories",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
        set(value) {
          const words = value.toLowerCase().split(' ');
          const wordFixed = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          this.setDataValue('name', wordFixed);
        }
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      }
    },
     { timestamps: true, paranoid: true }
  );
};