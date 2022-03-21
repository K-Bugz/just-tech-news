const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes); // Allows you to prepend all urls in user routes with /users
router.use('/posts', postRoutes);// Allows you to prepend all urls in user routes with /posts

module.exports = router;