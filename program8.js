/* a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout). */

var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function callback (response){
	response.pipe(bl(function (err, data){
		    console.log(data.toString().length);
		    console.log(data.toString());
		}));
});