const http = require('http');
const { server } = require('./env');
const { PostRouter } = require('./router');

const { host, port } = server;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  if (req.method === 'POST') {
    PostRouter(req, res);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};

const httpServer = http.createServer(requestListener);

httpServer.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
