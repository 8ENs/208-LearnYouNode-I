var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var n_lines = contents.toString().split('\n').length - 1;
console.log(n_lines);
