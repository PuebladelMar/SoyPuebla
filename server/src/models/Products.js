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
        allowNull: false,
        validate: {
          len: {
            args: [1, 50],
            msg: "Your field must have between 1 and 50 characters.",
          },
        },
      },
      price: {
        type: DataTypes.DECIMAL(9, 2),
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      mainImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.JSON,
      },
      sale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
