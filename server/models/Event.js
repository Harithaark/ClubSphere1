const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Club = require('./Club');

const Event = sequelize.define('Event', {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  date: DataTypes.DATE,
});

Event.belongsTo(Club);
Club.hasMany(Event);

module.exports = Event;
