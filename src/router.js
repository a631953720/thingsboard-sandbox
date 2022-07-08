const { deviceService } = require('./service');

const routerMap = {
  '/device': deviceService,
};

function reqOnEnd({ req, res, service, body }) {
  const dataPath = req.headers?.datapath;
  const result = service(body, dataPath);
  debugLog('dataPath', dataPath, 'result', result);
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
}

function PostRouter(req, res) {
  let body = '';
  req.on('data', function (data) {
    body += data;
  });

  const service = routerMap[req.url];
  if (service && typeof service === 'function') {
    return req.on('end', () => {
      reqOnEnd({ req, res, service, body });
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
