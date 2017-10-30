var express = require('express')
var router = express.Router()
var cors = require('cors')

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'QnSbi0B8rWV0m8bePozGYdIz9',
  consumer_secret:      '4o5s8DWge4s2lsxnkGiZS3WmIp30Q1t3SKQXb7bXhFpKaH7MCj',
  access_token:         '303238217-2WAEKOsuQaEYGuJShEFWoRnJVtjG5F8pejYEvXwC',
  access_token_secret:  '7qep3VLGvIFDCj56KillG90bxamM2FWubZyLw4D9tm0Jv',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

/* GET users listing. */
router.get('/:screen_name/:max_id?', cors(), function(req, res, next) {
  var params = {
    screen_name: req.params.screen_name,
    count: req.query.count || 5,
    trim_user: !!req.params.max_id,
    tweet_mode: 'extended',
  }

  req.params.max_id && (params.max_id = req.params.max_id)

  T.get('statuses/user_timeline', params, function (err, data, response) {
    res.json(data)
  })
})

module.exports = router
