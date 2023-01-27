const router = require('express').Router();
// require models here
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');

// route models here
router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;
