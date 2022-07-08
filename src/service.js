const { pathMap } = require('./library');

function iCAP_ClientService(data, dataPath) {
  const runner = pathMap[dataPath];
  if (runner && typeof runner === 'function') {
    return runner(data);
  }
  console.error('can not find the data handler', `path: ${dataPath}`);
}

module.exports = {
  iCAP_ClientService,
};
