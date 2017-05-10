// Karma configuration
// Generated on Tue Mar 07 2017 12:19:50 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../app/lib/angular/angular.js',
      '../app/lib/angular/angular-*.js',
      '../test/lib/angular-mocks.js',
      '../test/lib/sinon-1.15.0.js',
      '../app/lib/jquery.min.js',
      '../app/lib/angular/angular.js',
      '../app/lib/angular/angular-resource.js',
      '../app/lib/angular/angular-route.min.js',
      '../app/lib/bootstrap.min.js',
      '../app/lib/underscore-1.4.4.min.js',
      '../app/lib/angular-spinkit/build/angular-spinkit.js',
      '../app/lib/ng-table/dist/ng-table.js',
      '../app/app.js',
      '../app/search/search.module.js',
      '../app/search/Search.Controller.js',
      '../app/search/search.Factory.js',
      'unit/search.Factory.spec.js',
      'unit/Search.controller.spec.js',
      'unit/app.spec.js'


    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
