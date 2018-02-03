const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const x = parseInt(req.body.x);
  const y = parseInt(req.body.y);
  const sum = x + y;

  // check that x and y are not undefined after parseInt
  x && y
    ? res.json({sum})
    : res.send("Enter a valid number for x and y to return the sum");
});

module.exports = router;
