import gulp from 'gulp';

// Plugins
import browserSync from 'browser-sync';

// Config
import path from "./config/path.js";
import app from "./config/app.js";

// Tasks
import html from './task/html.js';
import styles from './task/styles.js';
import js from './task/js.js';
import img from './task/img.js';
import font from './task/font.js';
import clear from './task/clear.js';

// Server
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Watchers
const watcher = () => {
    gulp.watch([path.html.watchIndex, path.html.watch, path.html.src], html).on('all', browserSync.reload);
    gulp.watch(path.style.src, styles).on('all', browserSync.reload);
    gulp.watch(path.js.watch, js).on('all', browserSync.reload);
    gulp.watch(path.img.watch, img).on('all', browserSync.reload);
}

const build = gulp.series(
    clear,
    gulp.parallel(html, styles, js, img, font)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

// tasks
export { watcher };
export { html };
export { styles };
export { js };
export { img };
export { font };

// build and dev
export default app.isProd ? build : dev;