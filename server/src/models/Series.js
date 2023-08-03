const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Series",
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
    },
    { timestamps: false }
  );
};