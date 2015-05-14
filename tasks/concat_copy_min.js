var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('config');
var path = require('path');
var concat = require('gulp-concat');
var rjs = require('gulp-requirejs');
var minifyCSS = require('gulp-minify-css');

console.log(config);

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
    './static/script/app.js'
  ], {
    base: path.join(__dirname, '../static')
  })
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});
// end min script

// start concat js
gulp.task('jslib', function() {
  return gulp.src('../static/js/lib/*.js')
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/'));
});
// end concat js


// start min style
gulp.task('cssmin', function () {
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
    shim: {},
  })
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});
// end requirejs

// gulp.task('min', ['copy', 'cssmin', 'requirejs', 'uglify'])
gulp.task('min', ['cssmin', 'requirejs', 'uglify'])
