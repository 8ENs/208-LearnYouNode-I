var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, data) { 
	var n_lines = data.toString().split('\n').length - 1;
	console.log(n_lines);
});
