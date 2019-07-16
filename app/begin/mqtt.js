const mongo = require('mongodb');
const bmweb = require('bmweb');
const app = bmweb.app;

var createServer = function() {
  var net = require('net');
  var mqttCon = require('mqtt-connection');
  var server = new net.Server();

  server.on('connection', function(stream) {
    var client = mqttCon(stream);

    // client connected
    client.on('connect', function(packet) {
      // acknowledge the connect packet
      client.connack({returnCode: 0});
    });

    // client published
    client.on('publish', function(packet) {
      // send a puback with messageId (for QoS > 0)
      client.puback({messageId: packet.messageId});
    });

    // client pinged
    client.on('pingreq', function() {
      // send a pingresp
      client.pingresp();
    });

    // client subscribed
    client.on('subscribe', function(packet) {
      // send a suback with messageId and granted QoS level
      client.suback({granted: [packet.qos], messageId: packet.messageId});
    });

    // timeout idle streams after 5 minutes
    stream.setTimeout(1000 * 60 * 5);

    // connection error handling
    client.on('close', function() {
      client.destroy();
    });
    client.on('error', function() {
      client.destroy();
    });
    client.on('disconnect', function() {
      client.destroy();
    });

    // stream timeout
    stream.on('timeout', function() {
      client.destroy();
    });
  });

  // listen on port 1883
  server.listen(1883);
};

var createClient = function(callback) {
  var net = require('net');
  var mqttCon = require('mqtt-connection');
  var stream = net.createConnection(1883, 'localhost');
  var client = mqttCon(stream);
  client.on('connect', function(err) {
    console.log('line 36 connect', err);
    callback(err, client);
  });

  client.on('message', function(topic, message) {
    // message is Buffer
    console.log('line 39', topic);
    console.log('line 40', message.toString());
  });
};

var exp = module.exports;
exp.start = function(callback) {
  callback();
  // createServer();
};

exp.afterStart = function(callback) {
  callback();
  // createClient(function(err, client) {
  //   console.log('line 99 connect ok');
  // });
};
