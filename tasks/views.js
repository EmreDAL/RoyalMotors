import { isProduction, paths } from './config'
import path from 'path'
import gulp from 'gulp'
import pug from 'gulp-pug'

export function pugjs () {
  const pugjsSrc = [`${paths.view}/**/*.pug`]

  const pugjsOptions = {
    filename: 'index'
  }

  return gulp
    .src(pugjsSrc)
    .pipe(pug(pugjsOptions))
    .pipe(gulp.dest(paths.viewDest))
}
