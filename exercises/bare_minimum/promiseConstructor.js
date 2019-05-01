/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// Create a promise with new Promise constructor
// async 
// Pass success into resolve function
// success value only available in next "then" block
// only 1 value can ever be passed into resolve
// Pass any errors into reject function
// error made available in the "catch" block
// return promise instance (synchronous)

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        var str = data.toString();
        var index = str.indexOf('\n');
        var firstLine = str.slice(0, index);
        resolve(firstLine);
      }
    })
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  return new Promise((resolve, reject) => {
    request(url, (err,response) => {
      if (err) {
        reject(err)
      } else {
        resolve(response && response.statusCode)
      }
    })
  })
};
// request(url, (err, response) => {
//   if(err){
//     callback(err);
//   } else {
//     callback(null, response && response.statusCode)
//   }
// })
// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
