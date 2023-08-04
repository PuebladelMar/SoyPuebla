const { DataTypes, Sequelize } = require("sequelize");

const allowedEmailDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "ymail.com",
  "icloud.com",
  "me.com",
  "mac.com",
];

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          len: {
            args: [1, 15],
            msg: "Your field must have between 1 and 15 characters.",
          },
          set(value) {
            const words = value.toLowerCase().split(" ");
            const wordFixed = words
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
            this.setDataValue("name", wordFixed);
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Invalid email format.",
          },
          isAllowedEmailDomain(value) {
            const emailDomain = value.split("@")[1];
            if (!allowedEmailDomains.includes(emailDomain)) {
              throw new Error("Email domain is not allowed.");
            }
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isStrongPassword(value) {
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
            if (!passwordRegex.test(value)) {
              throw new Error(
                "Password must contain at least one letter, one number, and one special character and be at least 8 characters long."
              );
            }
          },
        },
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { timestamps: true, 
      paranoid: true,
    }
  );
};