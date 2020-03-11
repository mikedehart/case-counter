// Entrypoint for API routes
const router = require('express').Router(); 
const Sybase = require('../conf/db.dev.js');

Sybase.use(__dirname + "\\models");

router.use('/country', require('./routes/countryRoutes'));
router.use('/edm', require('./routes/edmRoutes'));
router.use('/eim', require('./routes/eimRoutes'));
router.use('/ux', require('./routes/uxRoutes'));

module.exports = router;  