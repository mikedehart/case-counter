
const router = require('express').Router();
const controller = require('../controllers/eimController');


router.route('/').all(controller.get);

module.exports = router;