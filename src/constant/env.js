const configs = require('../../config.json');
const { loadConfigFile } = require('../library');

module.exports = {
  deviceConfigs: configs.device,
  server: configs.server,
  ...loadConfigFile(configs.device)
};
