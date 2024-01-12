import gulp from 'gulp';
import path from "../config/path.js";
import newer from "gulp-newer";

const font = () => {
    return gulp.src(path.font.src)
        .pipe(newer(path.font.dest))
        .pipe(gulp.dest(path.font.dest));
}

export default font;