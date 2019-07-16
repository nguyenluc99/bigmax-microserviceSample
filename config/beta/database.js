/**
 * @author [Lê Tiến Nam]
 * @email [letiennam29@mail.com]
 * @create date 2017-09-15 06:00:30
 * @modify date 2017-09-15 06:00:30
 * @desc [description]
 */
var mqBMDB = [{
  protocol: 'amqp',
  hostname: '10.10.0.22',
  port: 5672,
  username: 'bmdb_dev_backend_bmpos',
  password: 'smaoSfNjnjbdla79k5Hg',
  vhost: '/bmdb/dev/backend/bmpos',
  heartbeat: 2,
}];
// const serverType = require('bmweb').app.argv.s;

var config = {
  DB: {
    db: 'MONGO',
    type: 'mqrpc', //direct or mqrpc
    rpc: {
      service: {
        exchange: 'bmdb.dev.backend.bmpos', //Bridge communication
        appId: 'VkR4fIrWsz7LhV3SMeRw', //secret key of routingKey
        prefetch: 10, //number concurrent fetch
        timeDelayReconnect: 1000, //time delay reconnect
        timeout: 60000, //Default 60s
        expiration: 30000, //Default 30s
        headers: { privateKey: '123456' },
      },
      mq: mqBMDB,
    },
  },
  // MARIA: {
  //   db: 'MARIA',
  //   type: 'mqrpc', //direct or mqrpc
  //   rpc: {
  //     service: {
  //       exchange: 'bmdb.dev.backend.bmpos', //Bridge communication
  //       appId: 'VkR4fIrWsz7LhV3SMeRw', //secret key of routingKey
  //       prefetch: 10, //number concurrent fetch
  //       timeDelayReconnect: 1000, //time delay reconnect
  //       timeout: 60000, //Default 60s
  //       expiration: 30000, //Default 30s
  //       headers: { privateKey: '123456' },
  //     },
  //     mq: mqBMDB,
  //   },
  // },
  REDIS: {
    db: 'REDIS',
    type: 'mqrpc', //direct or mqrpc
    rpc: {
      service: {
        exchange: 'bmdb.dev.backend.bmpos', //Bridge communication
        appId: 'VkR4fIrWsz7LhV3SMeRw', //secret key of routingKey
        prefetch: 10, //number concurrent fetch
        timeDelayReconnect: 1000, //time delay reconnect
        timeout: 60000, //Default 60s
        expiration: 30000, //Default 30s
        headers: { privateKey: '123456' },
      },
      mq: mqBMDB,
    },
  },
  MONGO: {
    db: 'MONGO',
    type: 'mqrpc', //direct or mqrpc
    rpc: {
      service: {
        exchange: 'bmdb.dev.backend.bmpos', //Bridge communication
        appId: 'VkR4fIrWsz7LhV3SMeRw', //secret key of routingKey
        prefetch: 10, //number concurrent fetch
        timeDelayReconnect: 1000, //time delay reconnect
        timeout: 60000, //Default 60s
        expiration: 30000, //Default 30s
        headers: { privateKey: '123456' },
      },
      mq: mqBMDB,
    },
    // config: [{
    //   host: "10.10.0.23", // dev
    //   db: "dev-BMPOS",
    //   port: 27017,
    //   username: "",
    //   password: ""
    // }]
  },
  ELASTIC: {
    db: 'ELASTIC',
    type: 'mqrpc', //direct or mqrpc
    rpc: {
      service: {
        exchange: 'bmdb.dev.backend.bmpos', //Bridge communication
        appId: 'VkR4fIrWsz7LhV3SMeRw', //secret key of routingKey
        prefetch: 10, //number concurrent fetch
        timeDelayReconnect: 1000, //time delay reconnect
        timeout: 60000, //Default 60s
        expiration: 30000, //Default 30s
        headers: { privateKey: '123456' },
      },
      mq: mqBMDB,
    },
  },
};

module.exports = config;