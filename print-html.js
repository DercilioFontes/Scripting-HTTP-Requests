var https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    var str = "";

    response.setEncoding('utf8');

    response.on('data', function(data) {
      str += data;
    });

    response.on('end', function(){
      console.log(str);
    });

    // response.on('error', function(err) {
    //   console.log(err);
    // });
  });
}

getAndPrintHTML();