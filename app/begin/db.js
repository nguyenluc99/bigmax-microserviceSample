const mongo = require('mongodb');
const bmweb = require('bmweb');
const logger = require('bmlogger').getLogger('log', __filename, process.pid);
const rpcServer = require('bmrpc-mq').server;
const rpcClient = require('bmrpc-mq').client;

const app = bmweb.app;
var exp = module.exports;
// app.dbFilter('MARIA', {
//   before: function(method, args, result, callback) {
//     console.log('line 11', method, args);
//     // args[1].select._id = '5bc8b344810a9c17d0393dc6';
//     // console.log('line 13', method, args);
//     callback(null, args, result);
//   },
//   after: function(method, args, result, callback) {
//     console.log('line 17', method, result);
//     callback(null, args, result);
//   },
// });
// app.dbFilter('MONGO', {
//   before: function(method, args, result, callback) {
//     callback(null, args, result);
//   },
//   after: function(method, args, result, callback) {
//     if (method == 'insert') {
//       console.log('line 29', method, result);
//       app.database.MARIA.insert('test2', result.data, function(err, result1) {
//         logger.info('line 31', result1);
//         if (err) {
//           callback(null, args, result);
//         } else {
//           callback(null, args, result1);
//         }
//       });
//     } else {
//       callback(null, args, result);
//     }
//   },
// });

exp.start = function(callback) {
  callback();
};

exp.afterStart = function(callback) {
  callback();
};