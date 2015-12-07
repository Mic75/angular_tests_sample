// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'test/main.js'
    ],
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    singleRun: true,

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
    reporters: ['dots', 'junit'],

    junitReporter: {
      outputDir: './',
      outputFile: 'result.xml',
      useBrowserName: false
    }
  });
};
