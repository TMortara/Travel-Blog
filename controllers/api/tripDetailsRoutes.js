const router = require('express').Router();
const { Trip, Daily } = require('../../models/Index');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const dailyData = await Daily.findAll({
            where: {trip_id: req.params.id},
            include: [
                {
                    model: Trip,
                    attributes: [
                        'id',
                        'title',
                        'starting_date',
                        'ending_date',
                        'trip_description',
                    ],
                },
            ],
        });
     
        const dailies = dailyData.map((daily) =>
            daily.get({ plain: true })
        );
        console.log(dailies);
        // res.render('trip-details', {
        //     dailies,
        //     loggedIn: req.session.loggedIn,
        // });
        res.json(dailies);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;