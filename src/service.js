function deviceService({ data, dataPath, deviceType, pathMap }) {
  const runner = pathMap[deviceType][dataPath];
  if (runner && typeof runner === 'function') {
    return runner(data);
  }
  console.error('can not find the data handler', `path: ${dataPath}`);
}

module.exports = {
  deviceService,
};
