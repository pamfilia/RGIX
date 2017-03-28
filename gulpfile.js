let gulp = require('gulp');
let webpack = require('webpack');
let webpackConfig = require('./webpack.config');
let moment = require("moment");

gulp.task('webpack', function () {
    console.log("Webpack started watching...");
    webpack(webpackConfig).watch({aggregateTimeout: 1000}, (err, stats) => {
        if (stats.hasErrors() || stats.hasWarnings())
            console.log(stats.toString());
        else {
            console.log('[' + moment().format('LTS') + '] Webpack build complete');
        }
    });
});

gulp.task('default', ['webpack'], function () {
});