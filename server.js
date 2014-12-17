var http = require('http');
var url = require('url');
var twilio = require('twilio');
http.createServer(function (req, res) {
    var urlopts = url.parse(req.url);
    if(urlopts.pathname == '/hello') {
        var twiRes = twilio.TwimlResponse();
        twiRes.say({language : 'ja-jp'}, 'こんにちは');
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiRes.toString());
    }
    else if (urlopts.pathname == '/test') {
        var client = twilio(
            'AC61e6d70fd202e5c5776168bc1b6165b6',
            '7e2833938114457766013c26310446bc');
        client.makeCall({
            from: '+81-50-3131-8520',    /* input your twilio number */
            to: '+81-80-6909-6886',      /* input validated number, if trial */
            url: 'http://callcenter-test.azurewebsites.net/hello'
        }, function(error, data) {
            console.log('makeCall error');
        });
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('電話をかけました！');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });        
        res.end('Not Found');
    }
}).listen(process.env.PORT);
