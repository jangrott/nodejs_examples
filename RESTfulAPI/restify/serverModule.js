var restify = require('restify');

var server = restify.createServer();

server.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'plain/text');
  res.send('Hello World\n');
  res.next();
});

module.exports = server;
