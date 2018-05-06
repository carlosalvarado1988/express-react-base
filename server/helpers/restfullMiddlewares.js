

exports.httpStatusCodes = function (req, res, next) {
  res.sendJSONNotYetImplemented = (msg) => {
    msg = msg || 'Not yet implemented'

    return res.status(204).send({
      message: msg
    })
  }

  res.sendJSONSuccess = (data) => (res.status(200).send(data));

  res.sendJSONError = (msg) => {
    msg = msg || 'Server error'
    console.error('API', '500 - Error', msg)

    return res.status(500).send({
      message: msg
    })
  }

  res.sendJSONNotFound = (msg) => {
    var content = {
      status: 'Not found',
      data: [],
      message: msg || 'Not found'
    }
    return res.status(404).send({content})
  }

  res.sendJSONForbidden = function (msg) {
    var offender = req.user ? 'user ' + req.user.id : ''
    console.info('API', '403 - Forbidden', req.path, offender)
    msg = msg || 'User forbidden'

    return res.status(403).send({
      message: msg
    })
  }

  res.sendJSONInvalid = function (msg) {
    console.warn('API', '400 - invalid', msg || '', ' - headersSent: ', res.headersSent)
    var content = {
      status: 'Invalid request',
      data: [],
      message: msg || 'Invalid request'
    }
    return res.status(400).send({content})
  }
  next()
}
