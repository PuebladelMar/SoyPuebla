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
};