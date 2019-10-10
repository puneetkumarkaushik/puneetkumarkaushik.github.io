var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
	if(req.url === '/'){
		fs.readFile('index.html', function(err, data) {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write(data);
		    res.end();
  		});
	}
	else if(req.url.match('\.html$')){
		filePath = path.join(__dirname, req.url);
		fs.readFile(filePath, function(err, data) {
			if(err){
				fs.readFile('pages/notFound.html', function(err, data) {
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(data);
			    res.end();
				});
			}else {
				res.writeHead(200, {'Content-Type': 'text/html'});
			    res.write(data);
			    res.end();
			}
  		});
	}
	else if(req.url.match("\.css$")){
		var cssPath = path.join(__dirname, req.url);
		var cssFile = fs.createReadStream(cssPath, 'UTF-8');
		res.writeHead(200, {'Content-Type': 'text/css'});
		cssFile.pipe(res);
	}
	else if(req.url.match("\.js$")){
		var jsPath = path.join(__dirname, req.url);
		var jsFile = fs.createReadStream(jsPath, 'UTF-8');
		res.writeHead(200, {'Content-Type': 'text/javascript'});
		jsFile.pipe(res);
	}
	else if(req.url.match("\.png$")){
		var imgPath = path.join(__dirname, req.url);
		var imgFile = fs.createReadStream(imgPath);
		
		res.writeHead(200, {'Content-Type': 'text/css'});
		imgFile.pipe(res);
	}
	else if(req.url.match("\.jpg$")){
		var imgPath = path.join(__dirname, req.url);
		var imgFile = fs.createReadStream(imgPath);
		
		res.writeHead(200, {'Content-Type': 'text/css'});
		imgFile.pipe(res);
	}
	else if(req.url.match("\.jpeg$")){
		var imgPath = path.join(__dirname, req.url);
		var imgFile = fs.createReadStream(imgPath);
		
		res.writeHead(200, {'Content-Type': 'text/css'});
		imgFile.pipe(res);
	}
	else if(req.url.match("^/contact.html?")){
		fs.readFile('contact.html', function(err, data) {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write(data);
		    res.end();
		    storeData(req.url);
  		});
	}
	else {
		fs.readFile('pages/notFound.html', function(err, data) {
		    res.writeHead(200, {'Content-Type': 'text/html'});
		    res.write(data);
		    res.end();
  		});
	}
	// console.log(req.url);
}).listen(8080);
console.log('nodejs is running on 8080');