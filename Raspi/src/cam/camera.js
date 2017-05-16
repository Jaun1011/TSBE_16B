var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
	sys.puts(stdout) 
	exec("raspistill --nopreview --quality 100 -o ./pic/cam.jpg", puts);
}

exec("raspistill --nopreview --quality 100 -o ./pic/cam.jpg", puts);
