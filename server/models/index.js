const sequelize = require('../config/db');
const User = require('./User');
const Club = require('./Club');
const Event = require('./Event');

// Relationships
Club.hasMany(User);
User.belongsTo(Club);

Club.hasMany(Event);
Event.belongsTo(Club);

module.exports = { sequelize, User, Club, Event };
