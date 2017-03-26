module.exports = function (gulp, callback) {
    console.log('Task-2');
    callback(); // Don't forget this, otherwise task will never finish!
};
// let webpack = require('gulp-webpack');
// module.exports = function (gulp, callback) {
//   return gulp.src('./src/script/**/*.js')
//     .pipe(webpack(require('./webpack.config.js')))
//     .pipe(gulp.dest('./dist/'));
//   console.log('webpack task started');
//   callback();
// };