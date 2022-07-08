const configs = require('../../config.json');
const { loadConfigFile } = require('../library');

const { production, dev_host, product_host } = configs.server;

module.exports = {
  deviceConfigs: configs.device,
  server: {
    ...configs.server,
    host: production ? product_host : dev_host,
  },
  ...loadConfigFile(configs.device),
};
