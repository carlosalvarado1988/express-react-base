const helper = require('../helpers/patients')

exports.list = function (req, res) {
  helper.getPatientsList()
    .then((patient) => {
      if ( !patient ) {
        var message = 'No patients Found in patients table'
        res.sendJSONNotFound(message)
      } else {
        res.sendJSONSuccess(patient)
      }
    })
    .catch((err) => res.sendJSONError(err));
}