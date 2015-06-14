var gulp = require('gulp');
var RevAll = require('gulp-rev-all');
var revCollector = require('gulp-rev-collector');
var minifyHTML   = require('gulp-minify-html');
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

gulp.task('rev', ['cleancdn'],function() {
  var revAll = new RevAll({
    dontRenameFile: ['.html'] ,
    dontGlobal: [ /^\/favicon.ico$/ ,'.bat','.txt'],  
    prefix: './view/'
  });

  gulp.src('dist/**/*.js')
    .pipe(revAll.revision())
    .pipe(gulp.dest('cdn'))
    // .pipe(revAll.versionFile())
    // .pipe(gulp.dest('cdn'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('rev'));
});

gulp.task('revCollector', function() {
  return gulp.src(['rev/**/*.json', 'view/**/*.html'])
    .pipe(revCollector({
      replaceReved: true,
      // dirReplacements: {
      //   '/dist/css': '/cdn/css',
      //   '/dist/js/': '/cdn/js/',
      //   'cdn/': function(manifest_value) {
      //     return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
      //   }
      // }
    }))
    .pipe(minifyHTML({
      empty: false,
      spare: true
    }))
    .pipe(gulp.dest('cdnview'));
});

gulp.task('replace', ['clean','revCollector']);