var router = require('express').Router();
var returngost = require('../../queries/returngost');

router.get('/', function (req, res) {
    res.json(returngost.getAllGostList());
    res.json("iugheiubgdib");
});

module.exports = router;