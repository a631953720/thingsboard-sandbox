const { getCPUUsage, getCPUFreq, getCPUFanRPM } = require('./library');

const handlerMap = {
  'CPU.Usage': getCPUUsage,
  'CPU.Freq': getCPUFreq,
  'CPU.FanRPM': getCPUFanRPM,
};

function iCAP_ClientService(data, dataType) {
  const runner = handlerMap[dataType];
  if (runner && typeof runner === 'function') {
    return runner(data);
  }
  console.error('can not find the data handler', `path: ${dataType}`);
}

module.exports = {
  iCAP_ClientService,
};
