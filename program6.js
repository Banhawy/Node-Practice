/* Practice using Node modules */
var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

var mymodule = require('./mymodule');

mymodule(dir, ext, function (err, list){
	if (err) console.error(err);
	list.forEach(function(item){
		console.log(item);
	    })
    });
