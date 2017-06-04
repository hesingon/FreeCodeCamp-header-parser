var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  var language = req.headers['accept-language'].split(",")[0]
  var software = req.headers['user-agent'].match(/\((.+?)\)/)[1]

  var result = {'ipaddress' : req.ip ,'Language' : language, 'software': software };

  res.json(result);
  console.log(JSON.stringify(req.headers));

});
module.exports = router;

