const gulp = require('gulp')
const sass = require('gulp-sass')
sass.compiler = require('sass')

const staticSrcPath = './static-src/'
const staticPath = './themes/blank/static/'

gulp.task('sass', () =>
  gulp.src(staticSrcPath + 'style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(staticPath + 'style/'))
)

gulp.task('watch', ['sass'], () =>
  gulp.watch(staticSrcPath + 'style/**/*.scss', ['sass'])
)

gulp.task('default', ['sass'])
