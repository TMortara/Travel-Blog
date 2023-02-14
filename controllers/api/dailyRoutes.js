const router = require('express').Router();
const { Daily } = require('../../models/Index');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    res.render('daily')
});

router.post('/', withAuth, async (req, res) => {
    try {

    const newDailyLog = await Daily.create({
        ...req.body,
        user_id: req.session.user_id,
    });
    res.status(200).json(newDailyLog);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;