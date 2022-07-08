const http = require('http');
const { PostRouter } = require('./router');

const host = '10.204.16.106';
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.method === 'POST') {
    PostRouter(req, res);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
