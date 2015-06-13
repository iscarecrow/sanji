var gulp = require('gulp');
var jshint = require('gulp-jshint');

// var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  // livereload.listen();
  gulp.watch('src/**/*.sass', ['sass']);
  // gulp.watch('static/**/*.js',['jshint']);
  // gulp.watch('src/**/*.js', ['babel']);
});