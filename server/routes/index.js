const express = require('express');
const router = express.Router();

const patients = require('../controllers/patients')


router.get('/message', function(req, res, next) {
  res.sendJSONSuccess('Cloud Care Project')
});

router.get('/patients', patients.list);

// router.get('/patients', function(req, res, next) {
//   const patients = [
//     {id:1, name: 'Carlos'},
//     {id:2, name: 'Pamela'}
//   ];
//   res.sendJSONSuccess(patients)
// });

module.exports = router;
