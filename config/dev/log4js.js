const serverName = require('bmweb').app.argv.name;
module.exports = {
  appenders: {
    file: {
      type: 'file',
      filename: './logs/node-log.log',
      maxLogSize: 52428800,
      level: 'ERROR',
      layout: {
        type: 'basic',
      },
      backups: 5,
    },
    console: {
      type: 'console',
    },
    logstash: {
      type: '@log4js-node/logstashudp',
      logType: serverName,
      fields: {
        env: 'dev'
      },
      host: '10.10.0.26',
      port: 5050,
      layout: {
        type: 'basic',
      },
    },
  },
  categories: {
    default: { appenders: ['file', 'console', 'logstash'], level: 'debug' },
  },
  replaceConsole: true,
};