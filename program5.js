var fs = require('fs');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

function listDir (){
    fs.readdir(dir, function (err, list){
	    if (err) return console.error(err);
	    list.map(function(curr){
		    if (curr.includes(ext)) console.log(curr);
		})
	   })
}

listDir();