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

module.exports = {
  dynamic: {
    getCPUUsage,
    getCPUFreq,
    getCPUFanRPM,
    getMEMUsage,
  },
};
