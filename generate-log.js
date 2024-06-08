var path = require('path');
var fs = require('fs');
var rfs = require('rotating-file-stream');
var logDirectory = path.join(__dirname, 'log');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
const pad = num => (num > 9 ? "" : "0") + num;
const generator = (time) => {
  if (!time) return "file.log";
  var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
  var day = pad(time.getDate());
  var hour = pad(time.getHours());
  var minute = pad(time.getMinutes());
  return `${month}${day}-${hour}${minute}-file.log`;
};

var accessLogStream = rfs.createStream(generator(new Date()), {size: "10M",interval: '1d',path: logDirectory});

module.exports = {accessLogStream: accessLogStream}