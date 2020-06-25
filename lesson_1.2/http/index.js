const http = require('http');

// http
//   .createServer(function(req, res) {
	
// 	res.writeHead(200, { "Content-Type": "text/plain" });
// 	res.end("HTTP server running on port 3002")
//   })
//   .listen(3002);

// http
//   .createServer(function(req, res) {
//     console.log("HTTP server running on port 3003");
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     // res.write("Hello World!");
//     res.end("<h1>im alive</h1>");
//   })
//   .listen(3003);
  

const server = http.createServer((req, res) => {
	const { headers, url, method } = req;

	console.log('headers', headers.host);
	console.log('url', url);
	console.log('method', method);

	res.writeHead(201, {
		'Set-Cookie': 'token=token'
	});

	return res.end('Hello');
});

server.listen(3000, () => {
	console.log('Server started listening');
});
