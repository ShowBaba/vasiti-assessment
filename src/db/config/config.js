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
    dialect: 'mysql',
  },
  /*
  NOTE: I resolved to a postgresql dialet
  because heroku requires a billing information to
  add their free ClearDB add on
  */
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
};
