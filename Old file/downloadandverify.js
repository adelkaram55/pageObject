var http = require("http");

module.exports = {
  "Is file avaliable" : function (client) {
    var request = http.request({
        host: "www.google.com",
        port: 80,
        path: "/images/srpr/logo11w.png",
        method: "HEAD"
    }, function (response) {
      client
        .assert.equal(response.statusCode, 200, 'Check status');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  }
};