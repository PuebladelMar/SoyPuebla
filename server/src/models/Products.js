const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Products = sequelize.define(
    "Products",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        // set(value) {
        //   const words = value.toLowerCase().split(" ");
        //   const transformWords = words.map((word) =>
        //     (word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        //   );
        //   this.setDataValue("name", transformWords);
        // },
        validate: {
          len: {
            args: [1, 50],
            msg: "Your field must have between 1 and 50 characters.",
          },
        },
      },
      price: {
        type: DataTypes.DECIMAL(9, 2),
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      mainImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.JSON,
      },
      sale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );

  const Colors = sequelize.define(
    "Colors",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,       
      },
      codHex: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  const Sizes = sequelize.define(
    "Sizes",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      size: {
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

  sequelize.define(
    "Categories",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      category: {
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

  sequelize.define(
    "Series",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      serie: {
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

  const ProductColorSize = sequelize.define('ProductColorSize', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        validate:{
            min: 0
        },
    },
    
  }, { timestamps: false });

};
