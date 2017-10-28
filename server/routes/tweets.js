var express = require('express')
var router = express.Router()

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'QnSbi0B8rWV0m8bePozGYdIz9',
  consumer_secret:      '4o5s8DWge4s2lsxnkGiZS3WmIp30Q1t3SKQXb7bXhFpKaH7MCj',
  access_token:         '303238217-2WAEKOsuQaEYGuJShEFWoRnJVtjG5F8pejYEvXwC',
  access_token_secret:  '7qep3VLGvIFDCj56KillG90bxamM2FWubZyLw4D9tm0Jv',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

/* GET users listing. */
router.get('/:screen_name', function(req, res, next) {
  console.log('req.query.screen_name=', req.query.screen_name)
  T.get('statuses/user_timeline', {
    screen_name: req.param.screen_name,
    count:5,
    trim_user: !!req.param.max_id,
    max_id: req.query.max_id || '',
  }, function (err, data, response) {
    res.json(data)
  })
})

module.exports = router
