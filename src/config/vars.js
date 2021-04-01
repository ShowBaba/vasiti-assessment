/* eslint-disable no-undef */
require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  dbUsername: process.env.dbUsername,
  dbPassword: process.env.dbPassword,
  dbname: process.env.dbname,
  dbHost: process.env.dbHost,
};
