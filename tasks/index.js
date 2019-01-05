import { paths } from "./config";
import path from "path";
import gulp from "gulp";

import { images, svgSprite } from "./images";
import { pugjs } from "./views";
import { css, criticalCss } from "./css";
import { scripts } from "./webpack";
import { swCreate } from "./swgenerate";
import { copy } from "./copy";
import { clean } from "./clean";
import { server } from "./server";

const watches = () => [
  gulp.watch([`${paths.css}/**/*.scss`], css),
  gulp.watch([`${paths.view}/**/*.pug`, `${paths.view}**/*.pug.json`], pugjs),
  gulp.watch([`${paths.svg}/*.svg`], gulp.series(svgSprite, pugjs)),
];

const html = gulp.series(pugjs, criticalCss);
const dev = gulp.series(pugjs, css, svgSprite, gulp.parallel(watches, server));
const build = gulp.series(
  clean,
  gulp.parallel(images, css, pugjs, scripts, copy),
  criticalCss,
  swCreate,
  server,
);

export { scripts, css, html, images, dev, build };

export default dev;
