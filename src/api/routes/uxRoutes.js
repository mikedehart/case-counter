
const router = require('express').Router();
const controller = require('../controllers/uxController');


router.route('/').all(controller.get);

module.exports = router;