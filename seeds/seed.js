const sequelize = require('../config/connection');
const seedTrips = require('./trip_data');
const seedUsers = require('./user_data');
const seedComments = require('./comment_data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();    // call ./user_data.js
  await seedTrips();    // call ./trip_data.js
  await seedComments(); // call ./comment_data.js

  process.exit(0);
};

seedAll();
