/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHub = require('./promisification')
var pluck = require('./promiseConstructor')



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // Use pluck.pluckFirstLineFromFileAsync to get first line (the username)
  // then uses getGitHub.getGitHubProfileAsync to send request
  // fs.writeFile to make new file with JSON response
   return pluck.pluckFirstLineFromFileAsync(readFilePath)
   .then((userName) => {
     if (!userName) {
       return "Error!"
     }
     return getGitHub.getGitHubProfileAsync (userName, (err)=> {
       if (err) {
         return err
       }
     })
   })


};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
