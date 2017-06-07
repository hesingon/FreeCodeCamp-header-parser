var express = require("express");
var router = express.Router();
var requestIP = require("request-ip")

/* GET home page. */
router.get('/', function(req, res) {

  var language = req.headers['accept-language'].split(",")[0]
  var software = req.headers['user-agent'].match(/\((.+?)\)/)[1]
  var ip = requestIP.getClientIp(req)
  var trimmedIP = req.ip.replace(/\:(.*)\:(.*)\:(.*)\:(.*)/, '')

  var result = {'ipaddress' : req.ip ,'Language' : language, 'software': software };

  res.json(result);
  //console.log(JSON.stringify(req.headers));
  console.log(trimmedIP)
  console.log(req.ip)

});
module.exports = router;

