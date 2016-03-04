var express = require('express')
var server = express();

server.get('/', function(req, res) {
  res.set('Content-Type', 'plain/text');
  res.send('Hello World\n');
});

module.exports = server;
