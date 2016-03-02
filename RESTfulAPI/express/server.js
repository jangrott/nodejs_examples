var express = require('express')
var app = express();

var port = process.argv[2] || 8080;

app.get('/', function(req, res) {
  res.send('Hello World\n');
});

app.listen(port);
