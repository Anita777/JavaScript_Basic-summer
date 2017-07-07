const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {

    res.statusCode = 200;
  // console.log(err);
  res.end(data);
})

console.log(req);

}).listen(3000, 'localhost', () => { console.log('Server running at localhost:3000') })