const router = require('express').Router();
// require models here
const userRoutes = require('./userRoutes');
const routineRoutes = require('./routineRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const logRoutes = require('./logRoutes');

// route models here
router.use('/users', userRoutes);
router.use('/routines', routineRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/logs', logRoutes);

module.exports = router;
