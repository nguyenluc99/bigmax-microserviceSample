const mqBMDB = require('./mqBMPOS');
// const serverType = require('bmweb').app.argv.s;
// const microservice = require('bmweb').app.argv.ms;

var config = {
  backendCompany: {
    service: {
      exchange: 'bmpos.beta.backend.company', //Bridge communication
      appId: 'aSyEZOo6A4qjWQgpkh5q', //secret key of routingKey
      prefetch: 10, //number concurrent fetch
      timeDelayReconnect: 1000, //time delay reconnect
      timeout: 60000, //Default 60s
      expiration: 30000, //Default 30s
      headers: { privateKey: '123456' },
    },
    mq: mqBMDB.company,
  },
  internalAPICompany: {
    service: {
      exchange: 'bmpos.beta.backend.internalAPICompany', //Bridge communication
      appId: 'aSyEZOo6A4qjWQgpkh5q', //secret key of routingKey
      prefetch: 10, //number concurrent fetch
      timeDelayReconnect: 1000, //time delay reconnect
      timeout: 60000, //Default 60s
      expiration: 30000, //Default 30s
      headers: { privateKey: '123456' },
    },
    mq: mqBMDB.company,
  },
  backendTransaction: {
    service: {
      exchange: 'bmpos.beta.backend.transaction', //Bridge communication
      appId: 'aSyEZOo6A4qjWQgpkh5q', //secret key of routingKey
      prefetch: 10, //number concurrent fetch
      timeDelayReconnect: 1000, //time delay reconnect
      timeout: 60000, //Default 60s
      expiration: 30000, //Default 30s
      headers: { privateKey: '123456' },
    },
    mq: mqBMDB.transaction,
  },
};

module.exports = config;