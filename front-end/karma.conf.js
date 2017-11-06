// Karma configuration
// Generated on Mon Nov 06 2017 22:54:52 GMT+0700 (+07)
var webPackConfig = require("./webpack.config");
webPackConfig.plugins.splice(2,1);
webPackConfig.output.devtoolModuleFilenameTemplate = function (parts) {
  return 'webpack://./src';
}
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'tests/**/*.spec.tsx',
      'tests/**/*.spec.ts'
    ],


    // list of files to exclude
    exclude: [],

    plugins : [
      'karma-webpack',
      'karma-jasmine', 
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-mocha-reporter',
      'karma-sourcemap-loader'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.spec.ts': ['webpack', 'sourcemap'],
      'tests/**/*.spec.tsx': ['webpack', 'sourcemap']
    },

    webpack:webPackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'mocha', 'kjhtml'],
    reporters: ['progress', 'mocha'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS', 'Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    mochaReporter: {
      output: 'minimal'
    }
  });
}