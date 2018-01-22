var https = require('https');

module.exports = function getHTML (options, callback) {
  /* Your code here */
  var requestOptions = options;

  /* Add your code here */
  https.get(requestOptions, function(response) {

    var str = "";

    response.setEncoding('utf8');

    response.on('data', function(data) {
      str += data;
    });

    response.on('end', function(){
      callback(str);
    });

  });
};