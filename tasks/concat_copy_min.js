var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('config');
var path = require('path');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var rjs = require('requirejs');


gulp.task('jshint', function() {
  return gulp.src([
      'static/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

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

// start min style
gulp.task('cssmin', function() {
    return gulp.src(
        './static/css/**/*.css'
      )
      .pipe(minifyCSS())
      .pipe(gulp.dest('./dist/css'));
  });
// end min style


// build start
gulp.task('build', function(cb) {
  rjs.optimize({
    // appDir: './',
    mainConfigFile: "static/js/main.js",
    baseUrl: 'static/js',
    removeCombined: true,
    findNestedDependencies: false,
    optimize: "none",
    optimizeCss: "standard",
    paths: {
      machina: "empty:"
    },
    dir: 'dist/js',
    generateSourceMaps: false,
    modules: [{
      name: "base"
    }, {
      name: "main-a",
      include: ["page/a.js"],
      exclude: ["base"]
    }, {
      name: "main-b",
      include: ["page/b.js"],
      exclude: ["base"]
    }, {
      name: "h5-base"
    }, {
      name: "h5-main-a",
      include: ["page/h5-a.js"],
      exclude: ["h5-base"]
    }]
  }, function(buildResponse) {
    console.log('build response', buildResponse);
    cb();
  }, cb);
});
// build end


// gulp.task('min', ['copy', 'cssmin', 'requirejs', 'uglify'])
gulp.task('default', ['build','rev']);