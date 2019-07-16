const mongo = require('mongodb');
const bmweb = require('bmweb');
const app = bmweb.app;
var exp = module.exports;
exp.start = function(callback) {
  callback();
};

exp.afterStart = function(callback) {
  // let id = new mongo.ObjectID().toString();
  callback();
};