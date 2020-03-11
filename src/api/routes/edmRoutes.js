
const router = require('express').Router();
const controller = require('../controllers/edmController');


router.route('/').all(controller.get);

module.exports = router;