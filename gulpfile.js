const gulp = require('gulp')
const stylus = require('gulp-stylus')
const nib = require('nib')
const sourcemaps = require('gulp-sourcemaps')

const staticSrcPath = './static-src/'
const staticPath = './static/'

gulp.task('stylus', () =>
  gulp.src(staticSrcPath + 'style/*.styl')
      .pipe(sourcemaps.init())
      .pipe(stylus({use: nib()}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(staticPath + 'style/'))
)

gulp.task('watch', ['stylus'], () =>
  gulp.watch(staticSrcPath + 'style/*.styl', ['stylus'])
)

gulp.task('default', ['stylus'])
