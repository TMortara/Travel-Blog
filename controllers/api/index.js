const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');
const addTripRoutes = require('./addTripRoutes')

router.use('/comment', commentRoutes);
router.use('/trip', tripRoutes);
router.use('/users', userRoutes);
router.use('/add-trip', addTripRoutes);

module.exports = router;