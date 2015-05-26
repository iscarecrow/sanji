var gulp = require('gulp');
var sass = require('gulp-sass');
// var coffee = require('gulp-coffee');
var babel = require('gulp-babel');
// var config = require('config');
// var gutil = require('gulp-util');
// var livereload = require('gulp-livereload');

// gulp.task('coffee', function() {
//   return gulp.src('./src/**/*.coffee')
//     .pipe(coffee({bare: true}).on('error', gutil.log))
//     .pipe(gulp.dest('./static'));
// });

gulp.task('sass', function() {
  return gulp.src('./src/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./es5'));
});

gulp.task('babel', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./es5'));
});

gulp.task('compile', ['babel','sass']);