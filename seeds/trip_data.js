const { Trip } = require('../models');

const tripdata = [
   {
      title: "Austin",
      post_content: "Austin is a hill country.",
      user_id: 1
  },
  {
      title: "Vist Korea",
      post_content: "Korea is a small but beautiful country",
      user_id: 2
  },
  {
      title: "Yosemite National Park",
      post_content: "You will touch the blue sky here in Yosemite!",
      user_id: 3
  },
  {
    title: "New Zealand"
  }
]
const seedTrips = () => Trip.bulkCreate(tripdata);

module.exports = seedTrips;
