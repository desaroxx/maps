// Karma configuration
// Generated on Fri Oct 30 2015 20:19:21 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "./compiled/bower_components/jquery/dist/jquery.min.js",
      "./compiled/bower_components/jquery-ui/jquery-ui.min.js",
      "./compiled/bower_components/underscore/underscore-min.js",
      "./compiled/bower_components/angular/angular.min.js",
      "./compiled/bower_components/angular-ui-router/release/angular-ui-router.min.js",

      "./compiled/planner/planner.js",
      "./compiled/planner/directive.js",
      "./compiled/planner/controller.js",
      "./compiled/planner/map/directive.js",
      "./compiled/planner/map/controller.js",
      "./compiled/planner/map/drawingTools/directive.js",
      "./compiled/planner/map/drawingTools/tool/markerToolDirective.js",
      "./compiled/googlemaps/googlemaps.js",
      "./compiled/googlemaps/map/factory.js",
      "./compiled/googlemaps/map/manager.js",
      "./compiled/googlemaps/marker/factory.js",
      "./compiled/googlemaps/marker/manager.js",
      "./compiled/googlemaps/polyline/factory.js",
      "./compiled/googlemaps/polyline/manager.js",
      "./compiled/googlemaps/overlay/factory.js",
      "./compiled/app.js",
      "./compiled/**/*.spec.js"
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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
