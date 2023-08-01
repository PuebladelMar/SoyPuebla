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
const { Products, Colors, Sizes, ProductColorSize } = sequelize.models;

Products.belongsToMany(Colors, { through: ProductColorSize });
Colors.belongsToMany(Products, { through: ProductColorSize });

Products.belongsToMany(Sizes, { through: ProductColorSize });
Sizes.belongsToMany(Products, { through: ProductColorSize });

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

