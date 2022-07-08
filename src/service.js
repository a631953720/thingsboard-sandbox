function deviceService({ data, dataPath, deviceType, pathMap }) {
  try {
    const runner = pathMap[deviceType][dataPath];
    if (runner && typeof runner === 'function') {
      return runner(data);
    }
    console.error('can not find the data handler', `path: ${dataPath}`);
  } catch (error) {
    console.error(error);
    return;
  }
}

module.exports = {
  deviceService,
};
