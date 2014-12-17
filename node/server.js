var http = require('http');
var twilio = require('twilio');
http.createServer(function (req, res) {
    var twiRes = twilio.TwimlResponse();
    twiRes.say({language : 'ja-jp'}, 'こんにちは');
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiRes.toString());
}).listen(process.env.PORT);
