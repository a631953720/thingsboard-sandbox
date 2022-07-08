const configs = require('../config.json');

// dynamic data
function getCPUUsage(data) {
  try {
    const parse = JSON.parse(data);
    return parse.CPU.Usage;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function getCPUFreq(data) {
  try {
    const parse = JSON.parse(data);
    return parse.CPU.Freq;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function getCPUFanRPM(data) {
  try {
    const parse = JSON.parse(data);
    return parse.CPU.FanRPM;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function getMEMUsage(data) {
  try {
    const parse = JSON.parse(data);
    return parse.MEM.Usage;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function normalCallback(path) {
  return (data) => {
    try {
      const parse = JSON.parse(data);
      const keys = path.split('.');

      let tempData = parse;
      while (keys.length > 0) {
        const key = keys.shift();
        tempData = tempData[key];
      }

      return tempData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
}

function loadConfigFile(config) {
  console.log(config);
  const methods = Object.keys(config);

  const handlerMap = {};

  // 建立handle data的對照表
  methods.forEach((method) => {
    const isArray = config[method].isArray;
    const path = config[method].path;
    if (isArray === false) {
      handlerMap[method] = normalCallback(path);
    }
  });

  const pathMap = {};

  // 建立path對照function的表
  methods.forEach((method) => {
    const path = config[method].path;
    pathMap[path] = handlerMap[method];
  });

  console.log({ handlerMap, pathMap });
  return {
    handlerMap,
    pathMap,
  };
}

module.exports = loadConfigFile(configs);
