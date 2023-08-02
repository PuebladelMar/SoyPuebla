require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
    DB_DEPLOY,
    {
       logging: false, 
       native: false, 
    }
 );
 const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
});

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
// Aca vendrian las relaciones
const { Products, Colors, Sizes, Categories, Series, ProductColorSize } = sequelize.models;

// Relación Products <-> Colors
Products.belongsToMany(Colors, { through: ProductColorSize, foreignKey: 'ProductId' });
Colors.belongsToMany(Products, { through: ProductColorSize, foreignKey: 'ColorId' });

// Relación Products <-> Sizes
Products.belongsToMany(Sizes, { through: ProductColorSize, foreignKey: 'ProductId' });
Sizes.belongsToMany(Products, { through: ProductColorSize, foreignKey: 'SizeId' });

// Relación Products <-> Categories
Products.belongsToMany(Categories, { through: "ProductCategories", foreignKey: 'ProductId', otherKey: 'CategoryId' });
Categories.belongsToMany(Products, { through: "ProductCategories", foreignKey: 'CategoryId', otherKey: 'ProductId' });

// Relación Products <-> Series
Products.belongsToMany(Series, { through: "ProductSeries", foreignKey: 'ProductId' });
Series.belongsToMany(Products, { through: "ProductSeries", foreignKey: 'SeriesId' });


module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

