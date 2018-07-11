const router = require('express').Router();
module.exports = router;
const unicornRouter = require('./unicorns');

//route to appropriate routers here
router.use('/unicorns', unicornRouter);

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
