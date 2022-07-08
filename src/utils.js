const { server } = require('./constant/env');

function debugLog(...args) {
  if (server.debug) console.log(...args);
}

module.exports = {
  debugLog,
};
