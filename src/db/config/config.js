const vars = require('../../config/vars');

module.exports = {
  development: {
    username: vars.dbUsername,
    password: vars.dbPassword,
    database: vars.dbname,
    host: vars.dbHost,
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
