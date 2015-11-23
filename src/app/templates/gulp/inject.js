'use strict';

var path = require('path');
var gulp = require('gulp');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var config = require('../config');

gulp.task('inject:tmp', function() {
  var js = gulp.src([
    path.join(config.paths.tmp, '**/*.js'),
    '!' + path.join(config.paths.tmp, 'vendor/*.js'),
  ]).pipe(angularFilesort());
  var css = gulp.src([
    path.join(config.paths.tmp, '**/*.css'),
    '!' + path.join(config.paths.tmp, 'vendor/*.css'),
  ], {
    read: false,
  });
  var vendor = gulp.src([
    path.join(config.paths.tmp, 'vendor/angular?(.min).js'),
    path.join(config.paths.tmp, 'vendor/*.js'),
    path.join(config.paths.tmp, 'vendor/*.css'),
  ], {
    read: false,
  });

  return gulp.src(path.join(config.paths.tmp, '**/*.html'))
    .pipe(inject(js))
    .pipe(inject(css))
    .pipe(inject(vendor, {
      name: 'bower',
    }))
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('inject:build', function() {
  var js = gulp.src([
    path.join(config.paths.dist, '**/*.js'),
    '!' + path.join(config.paths.dist, 'vendor/*.js'),
  ], {
    read: false,
  });
  var css = gulp.src([
    path.join(config.paths.dist, '**/*.css'),
    '!' + path.join(config.paths.dist, 'vendor/*.css'),
  ], {
    read: false,
  });
  var vendor = gulp.src([
    path.join(config.paths.tmp, 'vendor/angular?(.min).js'),
    path.join(config.paths.dist, 'vendor/*.js'),
    path.join(config.paths.dist, 'vendor/*.css'),
  ], {
    read: false,
  });

  return gulp.src(path.join(config.paths.dist, '**/*.html'))
    .pipe(inject(js))
    .pipe(inject(css))
    .pipe(inject(vendor, {
      name: 'bower',
    }))
    .pipe(gulp.dest(config.paths.dist));
});
