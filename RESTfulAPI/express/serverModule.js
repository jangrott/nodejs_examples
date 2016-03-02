var express = require('express')
var server = express();

server.get('/', function(req, res) {
  res.send('Hello World\n');
});

module.exports = server;
