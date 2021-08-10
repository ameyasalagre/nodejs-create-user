const express = require('express');
const userRoutes = require('./auth.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/new',
    route: userRoutes,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
