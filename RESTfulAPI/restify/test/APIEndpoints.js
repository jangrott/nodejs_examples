var chakram = require('chakram');
var expect = chakram.expect;
var server = require('../serverModule');

server.listen(3000);
var url = server.url;

describe("GET /", function() {
    it("says Hello World", function () {
        var response = chakram.get(url);
        expect(response).to.have.header('Content-Type', 'application/octet-stream'); // why not plain/text ?
        expect(response).to.have.status(200);
        return chakram.wait()
          .then(function (response) {
            expect(response.body).to.equal('Hello World\n');
          });
    });
});
