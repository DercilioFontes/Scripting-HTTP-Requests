var getHTML = require('../http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (str) {
  console.log(str.toUpperCase());
};

getHTML(requestOptions, printUpperCase);