'use strict';

var path = require('path');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var mainBowerFiles = require('main-bower-files');
var config = require('../config');

gulp.task('html', function() {
  return gulp.src(path.join(config.paths.src, '**/*.html'))
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('js', function() {
  return gulp.src(path.join(config.paths.src, '**/*.js'))
    .pipe(gulpif(config.sourcemaps, sourcemaps.init()))
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulpif(config.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('css', function() {
  return gulp.src(path.join(config.paths.src, '**/*.css'))
    .pipe(gulpif(config.sourcemaps, sourcemaps.init()))
    .pipe(autoprefixer())
    .pipe(gulpif(config.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('less', function() {
  return gulp.src(path.join(config.paths.src, '**/*.less'))
    .pipe(gulpif(config.sourcemaps, sourcemaps.init()))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulpif(config.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('sass', function() {
  return gulp.src(path.join(config.paths.src, '**/*.{scss,sass}'))
    .pipe(gulpif(config.sourcemaps, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulpif(config.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('images', function() {
  return gulp.src(path.join(config.paths.src, '**/*.{gif,jpeg,jpg,png,svg}'))
    .pipe(imagemin())
    .pipe(gulp.dest(config.paths.tmp));
});

gulp.task('vendor', function() {
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest(path.join(config.paths.tmp, 'vendor')));
});

gulp.task('other', function() {
  return gulp.src([
      path.join(config.paths.src, '**'),
      '!' + path.join(config.paths.src, '**/*.{html,js,css,less,sass,scss,gif,jpeg,jpg,png,svg}'),
    ])
    .pipe(gulp.dest(config.paths.tmp));
});
