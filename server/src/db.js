require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Products, Colors, Sizes, Categories, Series, Stocks, Users, Reviews, EmailNotify, ColorImages, Informations, Questions, StockNotifies } = sequelize.models;

Products.hasMany(Stocks, { onDelete: 'CASCADE', hooks: true });
Colors.hasMany(Stocks, { onDelete: 'CASCADE', hooks: true });
Sizes.hasMany(Stocks, { onDelete: 'CASCADE', hooks: true });

Stocks.belongsTo(Products, { onDelete: 'CASCADE', hooks: true });
Stocks.belongsTo(Colors, { onDelete: 'CASCADE', hooks: true });
Stocks.belongsTo(Sizes, { onDelete: 'CASCADE', hooks: true });

// Relación Products <-> Categories
Products.belongsToMany(Categories, { through: "ProductCategories", onDelete: 'CASCADE' });
Categories.belongsToMany(Products, { through: "ProductCategories", onDelete: 'CASCADE' });

// Relación Products <-> Series
Products.belongsToMany(Series, { through: "ProductSeries", onDelete: 'CASCADE' });
Series.belongsToMany(Products, { through: "ProductSeries", onDelete: 'CASCADE' });

// Relación de Carrito de compras
Stocks.belongsToMany(Users, { through: "Carts", onDelete: 'CASCADE' });
Users.belongsToMany(Stocks, { through: "Carts", onDelete: 'CASCADE' });

// Relación de Favoritos
Products.belongsToMany(Users, { through: "Favorites", onDelete: 'CASCADE' });
Users.belongsToMany(Products, { through: "Favorites", onDelete: 'CASCADE' });

//Relación entre Productos y Colores/Imagenes
Products.belongsToMany(Colors, {
  through: {
    model: ColorImages,
    unique: false,
    foreignKey: "ProductId",
    onDelete: 'CASCADE', 
  },
  otherKey: "ColorId",
});

Colors.belongsToMany(Products, {
  through: {
    model: ColorImages,
    unique: false,
    foreignKey: "ColorId",
    onDelete: 'CASCADE', 
  },
  otherKey: "ProductId",
});

StockNotifies.belongsTo(Stocks, {
  foreignKey: 'StockId',
  allowNull: false,
});

module.exports = {
  ...sequelize.models, 
  conn: sequelize, 
};
