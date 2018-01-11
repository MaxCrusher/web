var router = require('express').Router();

router.use('/gost', require('./gost'));

module.exports = router;