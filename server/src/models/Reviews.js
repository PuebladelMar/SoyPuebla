const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reviews",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      score: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: DataTypes.UUIDV4,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        set(value) {
          if (typeof value !== "string") {
            throw new Error("La descripción debe ser una cadena de texto.");
          }
          const words = value.toLowerCase().split(" ");
          const wordFixed = words
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          this.setDataValue("description", wordFixed);
        },
      },
    },
    { timestamps: false }
  );
};
