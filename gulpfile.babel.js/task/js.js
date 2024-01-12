import gulp from 'gulp';
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import gulpif from "gulp-if";
import path from "../config/path.js";
import app from "../config/app.js";

const js = () => {
    return gulp.src(path.js.src, { sourcemaps: false })
        .pipe(gulpif(app.isProd, uglify()))
        .pipe(gulp.dest(path.js.dest, { sourcemaps: false }));
}

export default js;