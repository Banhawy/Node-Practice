/*The module used for program 6*/

var fs = require('fs');

module.exports = function (dirName, dirExt, callback){
    fs.readdir(dirName, function (err, list){
	    if (err) return callback(err);
	    var ext = '.' + dirExt;
	    var results = [];
	    list.forEach(function(curr){
		    if (curr.includes(ext)) results.push(curr);
		})
	    callback(null, results);
	})
}

