const { Daily } = require('../models');

const dailydata = [
    {
       date_created: "2022-02-01",
       places_visited: "Auckland Botanical Garden, Auckland Harbor",
       daily_notes: "Today we arrived in Auckland and walked the city.",
       trip_id: 1,
    },
    {
        date_created: "2022-02-02",
        places_visited: "Christchurch",
        daily_notes: "We walked the city and saw the damage from past earthquakes. Ate at 27 Steps.",
        trip_id: 1,
    },
    {
        date_created: "2022-02-03",
        places_visited: "Franz Josef",
        daily_notes: "Hiked the glacier and the valley below.",
        trip_id: 1,
    },
    {
        date_created: "2022-02-04",
        places_visited: "New Zealand countryside",
        daily_notes: "Driving Day",
        trip_id: 1,
    },
    {
        date_created: "2022-02-05",
        places_visited: "Mount Cook",
        daily_notes: "Hike Mount Cook trails",
        trip_id: 1,
    },
    {
        date_created: "2022-02-06",
        places_visited: "Mount Cook",
        daily_notes: "Second day of hiking Mount Cook trails",
        trip_id: 1,
    },
    {
        date_created: "2022-02-10",
        places_visited: "Mount Aspiring National Park",
        daily_notes: "Hike the national park and sleep out under the stars.",
        trip_id: 1,
    },
    {
        date_created: "2022-02-11",
        places_visited: "Milford Sound",
        daily_notes: "Kayak through Milford Sound",
        trip_id: 1,
    },
    {
        date_created: "2022-02-14",
        places_visited: "Queenstown",
        daily_notes: "Walk through park and play disc golf.",
        trip_id: 1,
    },
];

const seedDaily = () => Daily.bulkCreate(dailydata);

module.exports = seedDaily;