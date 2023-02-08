const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');

router.use('/comments', commentRoutes);
router.use('/trips', tripRoutes);
router.use('/users', userRoutes);

module.exports = router;