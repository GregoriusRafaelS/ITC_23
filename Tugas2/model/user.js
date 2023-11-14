const Sequelize = require("sequelize");
const my_db = require('../util/connect_db');

const User = my_db.define("users", {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  fullName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  nim:{
    type: Sequelize.STRING,
    allowNull: null
  },
  angkatan:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT,
    allowNull: true
  },
});

module.exports = User;