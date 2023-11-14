require("dotenv").config;

const Sequelize = require('sequelize');

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD= process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;

const my_db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, 
  {
    host: 'localhost',
    dialect: 'mysql'
  }
  );

  module.exports = my_db;