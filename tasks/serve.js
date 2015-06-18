var gulp = require('gulp');
var serve = require('gulp-serve');
var webserver = require('gulp-webserver');


gulp.task('serve', serve('static'));

gulp.task('serve-build', serve(['public', 'build']));

gulp.task('serve-prod', serve({
  root: ['public', 'build'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));

gulp.task('webserver', function() {
  gulp.src('static')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});