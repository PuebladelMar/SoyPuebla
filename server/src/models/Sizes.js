const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Sizes = sequelize.define(
    "Sizes",
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
            args: [1, 5],
            msg: "Your field must have between 1 and 5 characters.",
          },
        },
      },
    },
    { timestamps: false }
  );
};
