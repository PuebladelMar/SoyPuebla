const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Informatios",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
      },
      phone: {
        type: DataTypes.STRING, // Corregido a STRING
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
      },
      whatsapp: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
      },
      facebook: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
      },
      instagram: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: {
            args: [1, 20],
            msg: "Your field must have between 1 and 20 characters.",
          },
        },
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    },
    { timestamps: true, paranoid: true } 
     );
};
