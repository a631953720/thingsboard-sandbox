const { dynamic } = require('./library');

const handlerMap = {
  'CPU.Usage': dynamic.getCPUUsage,
  'CPU.Freq': dynamic.getCPUFreq,
  'CPU.FanRPM': dynamic.getCPUFanRPM,
  'MEM.Usage': dynamic.getMEMUsage,
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
