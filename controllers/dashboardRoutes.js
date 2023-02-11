const router = require('express').Router();
const { User, Trip, Comment } = require('../models');

router.get('/', (req, res) => {
    res.render('dashboard')
})
module.exports = router;