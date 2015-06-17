var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var revCollector = require('gulp-rev-collector');
var revReplace = require("gulp-rev-replace");
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');

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
  gulp.src(['dist/**/*.js','dist/**/*.css'])
    .pipe(revAll.revision())
    .pipe(gulp.dest('cdn'))
    // .pipe(revAll.versionFile())
    // .pipe(gulp.dest('cdn'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('rev'));
});


gulp.task('usemin', ['cleanbuildview'], function () {
  return gulp.src('./view/**/c.html')
      .pipe(usemin({
        // css: [minifyCss(), 'concat'],
        // html: [minifyHtml({empty: true})],
        // js: [uglify(), rev()]
      }))
      .pipe(gulp.dest('buildview/'));
});


gulp.task("revreplace", ['cleancdnview'], function(){
  var manifest = gulp.src('./rev/rev-manifest.json');
  return gulp.src("./view/**/*.html")
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