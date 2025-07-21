const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Testing page');
});

server.listen(8000, () => {
  console.log('Server started on http://localhost:8000');
});
