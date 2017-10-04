/* Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the second  
  command-line argument. You must use the fs.createReadStream() method to  
  stream the file contents to the response.  */

var http = require('http');
var fs = require('fs')
var server = http.createServer(function (req, res) {  
      var filename = process.argv[3];
      var readStream = fs.createReadStream(filename);

      // This will wait until we know the readable stream is actually valid before piping
      readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
      readStream.pipe(res);
      });

      // Catch errors
      readStream.on('error', function(err){
        res.end(err);
      })
      
    });  
server.listen(process.argv[2]);