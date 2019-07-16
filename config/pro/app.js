var config = {
  name: 'Sample', //Name application
  debug: false, //No set, default is true
  dirBegin: 'app/begin', //components in begin will start before other components
  reloads: ['webserver'], //file config will watch change
};
module.exports = config;