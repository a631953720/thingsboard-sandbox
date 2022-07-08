const { iCAP_ClientService } = require('./service');

const routerMap = {
  '/iCAP-Client': iCAP_ClientService,
};

function PostRouter(req, res) {
  let body = '';

  req.on('data', function (data) {
    body += data;
  });

  const dataPath = req.headers?.datapath;
  const service = routerMap[req.url];
  if (service && typeof service === 'function') {
    return req.on('end', function () {
      const result = service(body, dataPath);
      console.log('dataPath', dataPath, 'result', result);
      if (result) {
        res.writeHead(200);
        res.end(JSON.stringify(result));
      } else {
        res.writeHead(500);
        res.end(
          JSON.stringify({
            errorCode: 1,
          })
        );
      }
    });
  }
  console.error('can not find the service', `url: ${req.url}`);
  res.writeHead(500);
  res.end(
    JSON.stringify({
      errorCode: 2,
    })
  );
}

module.exports = {
  PostRouter,
};
