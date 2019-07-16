/**
 * @author [Lê Tiến Nam]
 * @email [letiennam29@mail.com]
 * @create date 2017-09-15 05:59:36
 * @modify date 2017-09-15 05:59:36
 * @desc [description]
 */
const moment = require('moment');

var utils = module.exports;
/**
 * Invoke callback with check
 */
utils.invokeCallback = function(cb) {
  if (!!cb && typeof cb === 'function') {
    cb.apply(null, Array.prototype.slice.call(arguments, 1));
  }
};

utils.getTimeUTC = function(format) {
  if (format) return moment.utc().format(format);
  else return moment.utc().valueOf();
};

utils.getTimeLocal = function(format) {
  if (format) return moment.local().format(format);
  else return moment.local().valueOf();
};

utils.convertUTCToLocal = function(timeUTC, format) {
  if (format)
    return moment(parseInt(timeUTC))
      .local()
      .format(format);
  else
    return moment(parseInt(timeUTC))
      .local()
      .valueOf();
};

utils.convertLocalToUTC = function(timeLocal, format) {
  if (format)
    return moment(parseInt(timeLocal))
      .utc()
      .format(format);
  else
    return moment(parseInt(timeLocal))
      .utc()
      .valueOf();
};

utils.getFormat = function(time, format) {
  return moment(parseInt(time)).format(format);
};
