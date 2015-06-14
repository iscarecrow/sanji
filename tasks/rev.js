var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var revCollector = require('gulp-rev-collector');
var revReplace = require("gulp-rev-replace");
var minifyHTML = require('gulp-minify-html');
var path = require('path');
var config = require('config');
// var pkg = require('../package.json');
// var versionFolder = pkg.version.replace(/[^\.]+$/, 'x');

// gulp.task('rev', function() {
//   return gulp.src('.min/**')
//     .pipe(revall())
//     .pipe(gulp.dest('./.cdn/' + versionFolder))
//     .pipe(revall.manifest({
//       fileName: 'static-resource-map.json'
//     }))
//     .pipe(gulp.dest('.meta/'));
// });

gulp.task('rev', ['cleancdn'], function() {
  var revAll = new RevAll();

  // var revAll = new RevAll({
  //   dontRenameFile: ['.html'],
  //   dontGlobal: [/^\/favicon.ico$/, '.bat', '.txt'],
  //   prefix: './view/'
  // });
  gulp.src('dist/**/*.js')
    .pipe(revAll.revision())
    .pipe(gulp.dest('cdn/dist'))
    // .pipe(revAll.versionFile())
    // .pipe(gulp.dest('cdn'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('cdn/rev/js'));
});

gulp.task("revreplace", ['cleancdnview'], function(){
  var manifest = gulp.src('./cdn/rev/js/rev-manifest.json');
  return gulp.src("./cdn/**/*.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('cdnview'));
});

gulp.task('replace', ['cleancdnview'], function() {
  return gulp.src(['./cdn/rev/js/rev-manifest.json', './cdn/**/a.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('cdnview'));
});