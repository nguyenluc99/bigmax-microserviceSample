var exp = module.exports;
exp.start = function(callback) {
  callback();
  var app = this;
  app.routerFilter({
    before: function(err, fields, data, result, callback, breakCallback) {
      console.log('line 7 router', fields, data);
      callback(null, data.content, result);
    },
  });
};

exp.afterStart = function(callback) {
  callback();
};
