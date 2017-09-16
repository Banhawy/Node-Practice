/* a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout). */

var bl = require('bl');
var http = require('http');
var result;

module.exports = function (url, callback){
 http.get(url, function (response){
	response.pipe(bl(function (err, data){
		    if (err) return callback(err);
		    callback(null, data.toString());
		}));
	/*callback(null, result);*/
     })
};