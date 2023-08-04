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
        unique: true,
        validate: {
          len: {
            args: [1, 5],
            msg: "Your field must have between 1 and 5 characters.",
          },
        },
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
