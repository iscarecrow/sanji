var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('config');

gulp.task('clean', function() {
  return gulp.src([
    './cdnview',
  ])
    .pipe(clean());
});

gulp.task('cleancdn', function() {
  return gulp.src(['./cdn','./rev'],{read: false})
    .pipe(clean());
});
