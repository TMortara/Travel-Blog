const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');
// jw, I don't think we need this, since I already include this route in "tripRoutes.js", and that is why I am commenting out this.
// also, I don't know what "dailyRoutes.js" is for.
//const addTripRoutes = require('./addTripRoutes')

router.use('/comment', commentRoutes);
router.use('/trip', tripRoutes);
router.use('/users', userRoutes);
//router.use('/add-trip', addTripRoutes);

module.exports = router;