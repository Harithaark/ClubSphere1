const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Club = sequelize.define('Club', {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
});

module.exports = Club;
