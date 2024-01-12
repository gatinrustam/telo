import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import path from "../config/path.js";

const html = () => {
    return gulp.src(path.html.src)
    .pipe(fileInclude())
    .pipe(gulp.dest(path.html.dest));
}

export default html;