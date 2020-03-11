
const router = require('express').Router();
const controller = require('../controllers/countryController');


router.route('/').all(controller.get);

module.exports = router;