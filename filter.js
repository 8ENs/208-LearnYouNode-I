var fs = require('fs');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) 
			return callback(err);
		
		var result = [];
		list.forEach(function(file) {
			if (file.split('.')[1] == ext) {
				result.push(file);
			}
		});
		
		callback(null, result);
	});
};
