var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
  res.json('Cloud Care Project');
});

router.get('/patients', function(req, res, next) {
  res.json([
    {id:1, name: 'Carlos'},
    {id:2, name: 'Pamela'}
  ]);
});

module.exports = router;
