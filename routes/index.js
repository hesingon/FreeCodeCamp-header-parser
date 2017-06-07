var express = require("express");
var router = express.Router();
var requestIP = require("request-ip")

/* GET home page. */
router.get('/', function(req, res) {

  var language = req.headers['accept-language'].split(",")[0]
  var software = req.headers['user-agent'].match(/\((.+?)\)/)[1]
  var ip = requestIP.getClientIp(req)
  var ip2 = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  var trimmedIP = req.ip.replace(/(.*)\:(.*)\:(.*)\:/, '')

  var result = {'ipaddress' : trimmedIP ,'XFF-ipaddress' : ip2,'Language' : language, 'software': software };

  res.json(result);
  
});
module.exports = router;

