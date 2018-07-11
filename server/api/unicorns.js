const unicornRouter = require('express').Router()
const { Unicorn } = require('../db')
module.exports = unicornRouter

//gets all unicorns
// the full route is '/api/unicorns'

unicornRouter.get('/', async (req, res, next) => {
  try {
    const unicorns = await Unicorn.findAll();
    res.send(unicorns);
  } catch (err) {
    next(err);
  }
});
