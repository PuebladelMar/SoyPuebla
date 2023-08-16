const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      clerkId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      banUser: {
        type: DataTypes.BOOLEAN, 
        allowNull: false, 
        defaultValue: false, 
      },
      userRole: {
        type: DataTypes.ENUM('user', 'administrator', 'superadministrator'), 
        allowNull: false,
        defaultValue: 'user', 
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: {
            args: true,
            msg: "Must be a valid email address",
          },
        },
      },
    },
    { timestamps: true, 
      paranoid: true,
    }
  );
};
