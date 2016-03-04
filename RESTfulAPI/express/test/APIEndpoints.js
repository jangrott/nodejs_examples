var request = require('supertest');
var server = require('../serverModule');

server.listen(3000);

describe ('GET /', function () {
  it ('says Hello World', function (done) {
    request(server)
      .get('/')
      .expect('Content-Type', /plain\/text/)
      .expect(200)
      .expect('Hello World\n')
      .end(done);
  });
})
