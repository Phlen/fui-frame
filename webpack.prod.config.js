var config = require('./webpack.config').buildEnv('prod','/');
var del = require('del');

del.sync(['./build/prod/**/*.*']);

module.exports = config