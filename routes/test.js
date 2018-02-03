var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.y);
  var sum = x + y;

  // check that x and y are not undefined after parseInt
  x && y
    ? res.json({sum})
    : res.send("Enter a valid number for x and y to return the sum");
});

module.exports = router;
