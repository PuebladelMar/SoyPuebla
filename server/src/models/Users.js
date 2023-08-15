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
      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profileImage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { timestamps: true, 
      paranoid: true,
    }
  );
};

