/* Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
     After sending the string, close the connection.*/

var net = require('net');

var add_zero = function (number){
    return "0" + number.toString();
};


var string_num = function (year, month, day, hour, minute) {
    var format = year.toString() + '-' + needs_zero(month) + '-' +needs_zero(day) + ' ' + needs_zero(hour) + ':' + needs_zero(minute) + '\n';
    console.log(format);
    return format;
};

var needs_zero = function (number) {
    return (number<10) ? add_zero(number) : number.toString();
};

var date = new Date();
	
var data = string_num(date.getFullYear(),date.getMonth(), date.getDate(), date.getHours(), date.getMinutes());

var server = net.createServer(function (socket){
	socket.end(data);
    });

server.listen(process.argv[2]);