var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function(err, list) {
	list.forEach(function(file) {
		if (file.split('.')[1] == ext) {
			console.log(file);
		}
	});
});
