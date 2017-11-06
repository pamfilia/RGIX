let gulp = require('gulp');
let Server = require('karma').Server;
let path = require('path');
gulp.task('js-test', function (done) {
  new Server({
    configFile: path.resolve('./karma.conf.js'),
    singleRun: true
  }, done).start();
});