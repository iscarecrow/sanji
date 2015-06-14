var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('config');

gulp.task('cleancdnview', function() {
  return gulp.src([
    './cdnview'
  ],{read:false})
    .pipe(clean());
});

gulp.task('cleancdn', function() {
  return gulp.src(['./cdn','./rev'],{read: false})
    .pipe(clean());
});

gulp.task('cleandist', function() {
  return gulp.src(['./dist'],{read: false})
    .pipe(clean());
});