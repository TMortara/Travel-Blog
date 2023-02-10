const router = require('express').Router();
const commentRoutes = require('./commentRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');

router.use('/comment', commentRoutes);
router.use('/trip', tripRoutes);
router.use('/users', userRoutes);

module.exports = router;