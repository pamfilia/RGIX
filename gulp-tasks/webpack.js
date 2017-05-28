const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const moment = require("moment");

gulp.task('webpack', function () {
    webpack(webpackConfig).watch({ aggregateTimeout: 0, poll: 5000 }, (err, stats) => {
        console.log('[' + moment().format('LTS') + '] Webpack started watching...');
        if (stats.hasErrors() || stats.hasWarnings()) {
            console.log(stats.toString('errors-only'));
            console.log('[' + moment().format('LTS') + '] Webpack build failed!');
        }
        else {
            console.log(stats.toString({
                children: false,
                assets: false,
                chunks: true,
                chunkModules: false,
                colors: true,
                errors: false,
                timings: true,
                reasons: false,
                source: false,
                modules: false
            }));
            console.log('[' + moment().format('LTS') + '] Webpack build complete successfully');
        }
    });
});