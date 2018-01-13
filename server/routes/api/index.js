var router = require('express').Router();

router.use('/gost', require('./gost'));
router.use('/titul', require('./titul'));
router.use('/report', require('./report'));
module.exports = router;