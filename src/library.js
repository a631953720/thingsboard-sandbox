function getCPUUsage(data) {
  try {
    const parse = JSON.parse(data);
    return parse.CPU.Usage;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

module.exports = {
  getCPUUsage
};
