const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('trip')
})

module.exports = router;