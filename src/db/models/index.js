/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const envVars = require('../config/config');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const vars = require('../../config/vars');

const basename = path.basename(__filename);
const env = vars.NODE_ENV || 'development';
const config = envVars[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  // eslint-disable-next-line no-console
  console.log('Database Connected');
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
  // eslint-disable-next-line no-console
  console.log('Database Connected');
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
