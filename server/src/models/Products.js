const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Products = sequelize.define(
    "Products",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: {
            args: [1, 50],
            msg: "Your field must have between 1 and 50 characters.",
          },
          set(value) {
            const words = value.toLowerCase().split(' ');
            const wordFixed = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            this.setDataValue('name', wordFixed);
          }
        },
      },
      price: {
        type: DataTypes.DECIMAL(9, 2),
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      sale: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate: {
          min: 0,
          max: 100
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
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
