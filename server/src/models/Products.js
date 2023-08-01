const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          const words = value.toLowerCase().split(" ");
          const transformWords = words.map((word) =>
            (word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
          );
          this.setDataValue("name", transformWords);
        },
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
      image: {
        type: DataTypes.TEXT,
      },
      categories: {
        type: DataTypes.ENUM("top", "calza", "medio", "buzo"),
        allowNull: false,
      },
      sale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      serie: {
        //averiguar que es "serie"
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  sequelize.define(
    "color",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
      },
    },
    { timestamps: false }
  );
  sequelize.define(
    "size",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 5],
            msg: "Your field must have between 1 and 5 characters.",
          },
        },
      },
    },
    { timestamps: false }
  );
};
