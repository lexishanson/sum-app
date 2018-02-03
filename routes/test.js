var express = require('express');
var router = express.Router();

/* GET sum of x and y. */
router.get('/', function(req, res, next) {
  res.send('sum');
});

module.exports = router;
