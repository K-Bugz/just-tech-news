const router = require('express').Router();

const userRoutes = require('./user-routes.js');

// Allows you to prepend all urls in user routes with /users
router.use('/users', userRoutes);

module.exports = router;
