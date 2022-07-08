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
  const deviceTypes = Object.keys(config);

  const handlerMap = {};
  const pathMap = {};
  deviceTypes.forEach((deviceType) => {
    handlerMap[deviceType] = {};
    pathMap[deviceType] = {};

    const methods = Object.keys(config[deviceType]);
    // 建立handle data的對照表
    methods.forEach((method) => {
      const isArray = config[deviceType][method].isArray;
      const path = config[deviceType][method].path;
      if (!isArray) {
        handlerMap[deviceType][method] = normalCallback(path);
      }
    });
    // 建立path對照function的表
    methods.forEach((method) => {
      const path = config[deviceType][method].path;
      pathMap[deviceType][path] = handlerMap[deviceType][method];
    });
  });

  return {
    handlerMap,
    pathMap,
  };
}

module.exports = {
  loadConfigFile,
};
