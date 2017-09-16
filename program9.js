/* a program that performs an HTTP GET request to 3 URLa provided to you  
  as the first three command-line arguments. You must collect the complete 
  content provided to you by each of the URLs and print it to the console (stdout). 
  You don't need to print out thelength, just the data as a String; one line per URL. 
  The catch is that you must print them out in the same order as the URLs are provided to you as  
  command-line arguments.*/
var mymodule = require('./httpModule');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var results = [];
var counter = 0;

function printData(){
    for (i = 0; i<3; i++)
	console.log(results[i]);
}


function getData(index){
    mymodule(process.argv[2+index], function(err, data){
	    results[index] = data;
	    counter++;
	    if (counter == 3)
		printData();
	});
};

for (var i = 0; i<3; i++)
    getData(i);
