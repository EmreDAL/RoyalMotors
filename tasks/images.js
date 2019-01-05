import { isProduction, paths } from './config'

import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import svgSprites from 'gulp-svg-sprites'

export function images () {
  const imageminSrc = `${paths.img}/**/*.*`

  const imageminOption = [
    imagemin.gifsicle({
      interlaced: true
    }),
    imagemin.jpegtran({
      progressive: true
    }),
    imagemin.optipng({
      optimizationLevel: 5
    }),
    imagemin.svgo({
      plugins: [
        {
          removeViewBox: true,
          removeStyleElement: true,
          removeScriptElement: true,
          removeDesc: true,
          minifyStyles: true,
          convertStyleToAttrs: true,
          removeComments: true,
          removeMetadata: true
        },
        {
          cleanupIDs: false
        }
      ]
    })
  ]

  return gulp
    .src(imageminSrc, svgSprite)
    .pipe(imagemin(imageminOption))
    .pipe(gulp.dest(paths.imgDest))
}

export function svgSprite () {
  const svgSrc = `${paths.svg}/**/*.svg`

  const svgOption = [
    imagemin.svgo({
      plugins: [
        {
          removeViewBox: true,
          removeStyleElement: true,
          removeScriptElement: true,
          removeDesc: true,
          minifyStyles: true,
          convertStyleToAttrs: true,
          removeComments: true,
          removeMetadata: true
        },
        {
          cleanupIDs: false
        }
      ]
    })
  ]

  const svgSpriteConfig = {
    mode: 'symbols',
    baseSize: 16,
    selector: 'icon-%f'
  }

  return gulp
    .src(svgSrc)
    .pipe(imagemin(svgOption))
    .pipe(svgSprites(isProduction ? [] : svgSpriteConfig))
    .pipe(gulp.dest(paths.svgDest))
}
