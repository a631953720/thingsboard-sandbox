const { pathMap } = require('./library');
const { debugLog } = require('./utils');
const { iCAP_ClientMockDynamicData, iCAP_ClientPathList, sysInnoMockData, sysInnoPathList } = require('./demo/mock');

function deviceService(data, dataPath, deviceType) {
  const runner = pathMap[deviceType][dataPath];
  if (runner && typeof runner === 'function') {
    return runner(data);
  }
  console.error('can not find the data handler', `path: ${dataPath}`);
}

// only for test
iCAP_ClientPathList.forEach((path) => {
  const result = deviceService(iCAP_ClientMockDynamicData(), path, 'iCAP_Client');
  debugLog(result);
});

sysInnoPathList.forEach((path) => {
  const result = deviceService(sysInnoMockData(), path, 'sysInno');
  debugLog(result);
});

module.exports = {
  deviceService,
};
