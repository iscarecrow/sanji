var gulp = require('gulp');
// var livereload = require('gulp-livereload');

gulp.task('watch', function() {
  // livereload.listen();
  gulp.watch('src/**/*.sass', ['sass']);
  // gulp.watch('src/**/*.js', ['babel']);
});