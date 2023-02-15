const router = require('express').Router();
const { Trip, Daily } = require('../../models/Index');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const dailyData = await Daily.findAll({
            where: {trip_id: req.params.id},
            // include: [
            //     {
            //         model: Trip,
            //         attributes: [
            //             'id',
            //             'title',
            //             'starting_date',
            //             'ending_date',
            //             'trip_description',
            //         ],
            //     },
            // ],
        });

        const dbTrip = await Trip.findByPk(req.params.id)
        const trip = dbTrip.get({ plain: true });
     
        const dailies = dailyData.map((daily) =>
            daily.get({ plain: true })
        );
        console.log(dailies);
        console.log(trip)
        
        res.render('trip-details', {
            dailies,
            trip,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id/add-daily', (req, res) => {
    try {
      res.render('add-daily-info');
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;