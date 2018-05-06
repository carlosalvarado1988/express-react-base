var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
  res.sendJSONSuccess('Cloud Care Project')
});

router.get('/patients', function(req, res, next) {
  const patients = [
    {id:1, name: 'Carlos'},
    {id:2, name: 'Pamela'}
  ];
  res.sendJSONSuccess(patients)
});

module.exports = router;
