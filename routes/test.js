var express = require('express');
var router = express.Router();

/* GET sum of x and y. */
router.get('/test', function(req, res, next) {

  var x = req.param('x');
  var y = req.param('y');

  //string
  res.send({sum: x+y});
});

module.exports = router;
