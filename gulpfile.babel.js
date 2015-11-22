const path = require('path');
const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');

const config = {
  src: 'src',
  dest: 'generators',
};

gulp.task('clean', () => del(config.dest));

gulp.task('compile', gulp.series('clean', () => {
  return gulp.src(path.join(config.src, '**'), {dot: true})
    .pipe(babel({
      presets: ['es2015'],
      ignore: [
        '**/templates/**',
        '**/*.json',
      ],
    }))
    .pipe(gulp.dest(config.dest));
}));
