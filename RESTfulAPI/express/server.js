var server = require('./serverModule');

var port = process.argv[2] || 8080;

server.listen(port);
