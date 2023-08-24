const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const EmailNotify = sequelize.define(
    "EmailNotify",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            args: true,
            msg: "Must be an email",
          },
        },
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    { timestamps: false, paranoid: true }
  );
};
