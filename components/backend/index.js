module.exports.setup = function(app) {
  const filterGlobalControl = require('./filterGlobalControl');
  app.load(filterGlobalControl, { appIsOwner: true });
  const filterGlobalRouter = require('./filterGlobalRouter');
  app.load(filterGlobalRouter, { appIsOwner: true });
};