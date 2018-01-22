var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (str) {
  console.log(str.toLowerCase());
}

getHTML(requestOptions, printLowerCase);