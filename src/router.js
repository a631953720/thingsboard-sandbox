const { debugLog } = require('./utils');
const { deviceService } = require('./service');
const { pathMap } = require('./constant/env');

function reqOnEnd({ req, res, data }) {
  const dataPath = req.headers?.datapath;
  const deviceType = req.headers?.devicetype;

  const result = deviceService({ data, dataPath, deviceType, pathMap });
  debugLog('dataPath', dataPath, 'result', result);
  if (result) {
    res.writeHead(200);
    res.end(
      JSON.stringify({
        originData: data,
        dataPath,
        result: result,
      })
    );
  } else {
    res.writeHead(500);
    res.end(
      JSON.stringify({
        message: 'parse device data error',
      })
    );
  }
}

function PostRouter(req, res) {
  try {
    let body = '';
    req.on('data', function (data) {
      body += data;
    });

    return req.on('end', () => {
      reqOnEnd({ req, res, data: body });
    });
  } catch (error) {
    console.error(error);
    res.writeHead(500);
    res.end(
      JSON.stringify({
        message: 'unknown error',
      })
    );
  }
}

module.exports = {
  PostRouter,
};
