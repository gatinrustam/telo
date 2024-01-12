import gulp from 'gulp';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import gulpif from "gulp-if";
import path from "../config/path.js";
import app from "../config/app.js";

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

const styles = () => {
    return gulp.src(path.style.src, { sourcemaps: false })
        .pipe(sass())
        .pipe(autoprefixer(app.autoprefixer))
        .pipe(gulpif(app.isProd, cleanCSS()))
        .pipe(rename(app.basename))
        .pipe(gulp.dest(path.style.dest, { sourcemaps: false }));
}

export default styles;