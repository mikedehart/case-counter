// Entrypoint for API routes
const router = require('express').Router(); 
const Sybase = require('../conf/db.dev.js');

Sybase.use(__dirname + "\\models");

router.use('/country', require('./country/countryRoutes'));

module.exports = router;  