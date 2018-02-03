var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var x = parseInt(req.body.x);
  var y = parseInt(req.body.y);
  var sum = x + y;
  res.send({sum});

});

module.exports = router;
