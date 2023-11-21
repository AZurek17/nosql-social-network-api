const router = require('express').Router();
const usersRoutes = require('./Users-routes');
const thoughtsRoutes = require('./Thoughs-routes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;