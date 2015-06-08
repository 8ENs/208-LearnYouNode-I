var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
	var body = '';
	response.on("data", function(data) { 
		console.log(data.toString());
	});	
});

// function callback (response) { /* ... */ }
// response.on("data", function (data) { /* ... */ })
// .toString();
