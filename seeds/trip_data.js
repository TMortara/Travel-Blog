const { Trip } = require('../models/index.Js');

const tripdata = [
   {
      title: "Austin",
      location: "Austin, Texas",
      trip_description: "Austin is a hill country.",
      starting_date: "2022-03-06",
      ending_date: "2022-03-10",
      user_id: 1
  },
  {
      title: "Vist Korea",
      location: "Korea",
      trip_description: "10 day trip around Korea; Korea is a small but beautiful country",
      starting_date: "2021-01-01",
      ending_date: "2021-01-11",
      user_id: 2
  },
  {
      title: "Yosemite National Park",
      location: "California",
      trip_description: "You will touch the blue sky here in Yosemite!",
      starting_date: "2021-05-06",
      ending_date: "2021-05-12",
      user_id: 3
  },
  {
    title: "Going Down Under",
    location: "New Zealand",
    trip_description: "Travel to down under to visit both islands.",
    starting_date: "2022-01-30",
    ending_date: "2022-02-15",
    user_id: 1
  }
]
const seedTrips = () => Trip.bulkCreate(tripdata);

module.exports = seedTrips;
