const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('daily')
})

module.exports = router;