import gulp from 'gulp';
import path from "../config/path.js";
import app from "../config/app.js";
import imagemin from "gulp-imagemin";
import gulpif from "gulp-if";
import newer from "gulp-newer";

const img = () => {
    return gulp.src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
        .pipe(gulp.dest(path.img.dest));
}

export default img;