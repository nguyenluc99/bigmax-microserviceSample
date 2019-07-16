const logger = require('bmlogger').getLogger('BackendCache', __filename, process.pid);
const _ = require('lodash');
module.exports.start = function(app, cb) {
  const appName = app.configs().app ? app.configs().app.name || 'BackendCache' : 'BackendCache';
  logger.info(appName, 'start....');
  if (cb) cb();
};