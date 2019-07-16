const mqBMPOS = require('./mqBMPOS');
// const serverType = require('bmweb').app.argv.s;
// const microservice = require('bmweb').app.argv.ms;

// const mq = mqBMPOS.base;
const mq = mqBMPOS.base_dev_V2;

var config = {
  //service
  backendBase: {
    service: {
      exchange: 'bmpos.beta.backend.base', //Bridge communication
      patternTopic: '', //Topic communication, if no set or empty then patternTopic = exchange + '.#'
      appId: 'aSyEZOo6A4qjWQgpkh5q', //secret key of topic
      queueServer: 'aI1SnZS7i1fSUr9WU9KQ', //Not set or empty, all messages will remove on queue when disconnect, set must random name for you
      prefetch: 10, //number concurrent fetch
      timeDelayReconnect: 1000, //time delay reconnect
      dirRouters: 'backend/microservices/routers', //Dir contains routers
    },
    mq,
  },
};
module.exports = config;