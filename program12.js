/* Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  */
var http = require('http');
var fs = require('fs');
var map = require('through2-map');

var server = http.createServer(function (req, res){
    if (req.method !== 'POST') {
        return res.end('This server only accepts POST requests\n')
      }

    req.pipe(map(function (chunk) {  
        return chunk.toString().toUpperCase(); 
      })).pipe(res)
});

server.listen(process.argv[2]);