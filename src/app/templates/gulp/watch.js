'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('browser-sync:tmp', function(cb) {
  browserSync.init({
    server: config.paths.tmp,
  }, cb);
});

gulp.task('browser-sync:build', function(cb) {
  browserSync.init({
    server: config.paths.dist,
  }, cb);
});

gulp.task('reload', function() {
  return browserSync.reload();
});

gulp.task('watch:html', function() {
  gulp.watch(path.join(config.paths.src, '**/*.html'), gulp.series('html', 'inject:tmp', 'reload'));
});

gulp.task('watch:js', function() {
  gulp.watch(path.join(config.paths.src, '**/*.js'), gulp.series('js', 'reload'));
});

gulp.task('watch:css', function() {
  gulp.watch(path.join(config.paths.src, '**/*.css'), gulp.series('css', 'reload'));
});

gulp.task('watch:less', function() {
  gulp.watch(path.join(config.paths.src, '**/*.less'), gulp.series('less', 'reload'));
});

gulp.task('watch:sass', function() {
  gulp.watch(path.join(config.paths.src, '**/*.{sass,scss}'), gulp.series('sass', 'reload'));
});
