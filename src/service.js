const { pathMap } = require('./library');
const { iCAP_ClientMockDynamicData, iCAP_ClientPathList, sysInnoMockData, sysInnoPathList } = require('./mock');

function iCAP_ClientService(data, dataPath, deviceType) {
  const runner = pathMap[deviceType][dataPath];
  if (runner && typeof runner === 'function') {
    return runner(data);
  }
  console.error('can not find the data handler', `path: ${dataPath}`);
}

iCAP_ClientPathList.forEach((path) => {
  const result = iCAP_ClientService(iCAP_ClientMockDynamicData(), path, 'iCAP_Client');
  console.log(result);
});

sysInnoPathList.forEach((path) => {
  const result = iCAP_ClientService(sysInnoMockData(), path, 'sysInno');
  console.log(result);
});

module.exports = {
  iCAP_ClientService,
};
