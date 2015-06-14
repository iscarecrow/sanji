var gulp = require('gulp');
var uglify = require('gulp-uglify');
var config = require('config');
var path = require('path');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var rjs = require('requirejs');
var modules = require('../config/modules.json');

gulp.task('jshint', function() {
  return gulp.src([
      'static/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
  return gulp.src([
      'static/**/*.js'
    ], {
      base: path.join(__dirname, '../static/')
    })
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});



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
    modules: modules
  }, function(buildResponse) {
    console.log('build response', buildResponse);
    cb();
  }, cb);
});

gulp.task('cssmin', function() {
  return gulp.src(
      './static/css/**/*.css'
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

// gulp.task('min', ['copy', 'cssmin', 'requirejs', 'uglify'])
gulp.task('default', ['cleancdn', 'build', 'cssmin']);