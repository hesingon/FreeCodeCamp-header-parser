var express = require("express");
var router = express.Router();
var requestIP = require("request-ip")

var app = express()
app.enable('trust proxy')

/* GET home page. */
router.get('/', function(req, res) {

  var language = req.headers['accept-language'].split(",")[0]
  var software = req.headers['user-agent'].match(/\((.+?)\)/)[1]
  var ip = requestIP.getClientIp(req)
  var ip2 = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  var trimmedIP = req.ip.replace(/(.*)\:(.*)\:(.*)\:/, '')

  var result = {'ipaddress1' : trimmedIP ,'ipaddress2' : ip2 , 'ipaddress3' : req.ip ,'Language' : language, 'software': software };

  res.json(result);
  //console.log(JSON.stringify(req.headers));
  //var str = '::ffff:10.71.208.122'.replace(/(.*)\:(.*)\:(.*)\:/, '')
  //console.log("check if trimmed: " + str)
  //console.log(trimmedIP)
  //console.log(req.ip)

});
module.exports = router;

