var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('config');
var path = require('path');
var concat = require('gulp-concat');
var rjs = require('gulp-requirejs');
var minifyCSS = require('gulp-minify-css');
var shell = require('gulp-shell');
var rjsa = require('requirejs');

// start copy
gulp.task('copy', function() {
    return gulp.src([
        // './static/bower_components/teambition-ui/dist/fonts/*',
        // './static/images/**'
      ], {
        base: path.join(__dirname, '../static')
      })
      .pipe(gulp.dest('./dist'));
  })
  // end copy



// start min script
gulp.task('uglify', function() {
  return gulp.src([
      // './static/js/base.js',
      // './static/js/common.js'
    ], {
      base: path.join(__dirname, '../static/')
    })
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});
// end min script

// start concat js
gulp.task('jsbase', function() {
  return gulp.src([
      './static/js/lib/zepto/zepto.js',
      './static/js/lib/zepto/src/callbacks.js',
      './static/js/lib/zepto/src/deferred.js',
      './static/js/lib/zepto/src/touch.js',
      './static/js/lib/zepto/src/fx.js',
      './static/js/lib/zepto/src/fx_methods.js',
      './static/js/lib/zepto/zepto.settings.js',
    ])
    .pipe(uglify())
    .pipe(concat('base.js'))
    .pipe(gulp.dest('./dist/js/'));
});
// end concat js

// start concat js
gulp.task('jscommon', function() {
  return gulp.src([
      './static/js/comm/h5-pack.js',
      './static/js/comm/google-analytics.js'
    ])
    .pipe(uglify())
    .pipe(concat('common.js'))
    .pipe(gulp.dest('./dist/js/'));
});
// end concat js

// start min style
gulp.task('cssmin', function() {
    return gulp.src([
        // './static/bower_components/teambition-ui/dist/css/teambition-ui.css',
        './static/css/lib/jquery/jquery.css'
      ], {
        base: path.join(__dirname, '../static')
      })
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist'))
  })
  // end min style


// start requirejs
gulp.task('requirejs', function() {
  return rjs({
      name: 'main',
      baseUrl: 'static/js',
      mainConfigFile: 'static/js/main.js',
      out: 'main.js',
      exclude: ["backbone",
        "jquery",
        "swiper",
        "underscore"
      ],
      shim: {},
    })
    // .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});
// end requirejs


// scripts start, use gulp-shell to run r.js
gulp.task('scripts', shell.task([
  'r.js -o build.js'
]));
// scripts end


// build start
gulp.task('build', function(cb) {
  rjsa.optimize({
    // appDir: 'www',
    baseUrl: '../static/js',
    paths: {
      machina: "empty:"
    },
    dir: 'dist',
    modules: [{
      name: "base"
    }, {
      name: "main-a",
      include: ["page/a.js"],
      exclude: [
        "base"
      ]
    }, {
      name: "main-b",
      include: ["page/b.js"],
      exclude: [
        "base"
      ]
    }, {
      name: "h5-base"
    }, {
      name: "h5-main-a",
      include: ["page/h5-a.js"],
      exclude: [
        "h5-base"
      ]
    }]
  }, function(buildResponse) {
    // console.log('build response', buildResponse);
    cb();
  }, cb);
});
// build end


// gulp.task('min', ['copy', 'cssmin', 'requirejs', 'uglify'])
gulp.task('min', ['cssmin', 'jsbase', 'jscommon', 'requirejs'])