'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../config');

gulp.task('reload', function() {
  return browserSync.reload();
});

gulp.task('watch:js', function() {
  gulp.watch(path.join(config.paths.src, '**/*.js'), gulp.series('js', 'reload'));
});

gulp.task('watch:html', function() {
  gulp.watch(path.join(config.paths.src, '**/*.html'), gulp.series('html', 'reload'));
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
