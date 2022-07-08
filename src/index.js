const http = require('http');
const { getCPUUsage } = require('./library');

const host = '10.204.16.106';
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'POST') {
    let body = '';
    req.on('data', function (data) {
      body += data;
    });
    req.on('end', function () {
      const result = getCPUUsage(body);
      console.log('body: ', result);
      res.writeHead(200);
      res.end(JSON.stringify(result));
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
