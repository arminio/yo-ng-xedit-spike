'use strict';

module.exports = function(config) {

  config.set({
    basePath : '..', //!\\ Ignored through gulp-karma //!\\

    files : [ //!\\ Ignored through gulp-karma //!\\
        'src/bower_components/angular-xeditable/dist/js/xeditable.js',
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular/angular-route.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
      {
        pattern:'src/app/**/*.js', included: false
      },
        //'src/{app,components}/**/*.js',
        'test/unit/** /*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ]
  });

};
