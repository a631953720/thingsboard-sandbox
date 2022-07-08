const { debugLog } = require('../utils');
const { deviceService } = require('../service');
const { deviceDataA, deviceDataB } = require('./mock');
const { loadConfigFile } = require('../library');
const demoConfig = require('./config.demo.json');

const { device } = demoConfig;
const { device_type_A, device_type_B } = device;
const { pathMap } = loadConfigFile(demoConfig.device);

// only for test
Object.values(device_type_A)
  .map((d) => d.path)
  .forEach((path) => {
    const result = deviceService({ data: deviceDataA(), dataPath: path, deviceType: 'device_type_A', pathMap });
    debugLog(result);
  });

Object.values(device_type_B)
  .map((d) => d.path)
  .forEach((path) => {
    const result = deviceService({ data: deviceDataB(), dataPath: path, deviceType: 'device_type_B', pathMap });
    debugLog(result);
  });
