
const router = require('express').Router();
const controller = require('./countryController');


router.route('/').all(controller.get);

module.exports = router;