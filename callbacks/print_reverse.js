var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printRerverse(str) {
  var strRerv = "";
  for(var i = str.length - 1; i >= 0; i--) {
    strRerv += str[i];
  }
  console.log(strRerv);
}

getHTML(requestOptions, printRerverse);