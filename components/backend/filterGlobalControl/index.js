var exp = module.exports;
exp.start = function(callback) {
  callback();
  var app = this;
  app.controlFilter({
    before: function(err, fields, data, result, callback, breakCallback) {
      callback(null, data, result);
    },
  });
};

exp.afterStart = function(callback) {
  callback();
};