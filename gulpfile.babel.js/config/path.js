const pathSrc = './src';
const pathDest = './public';

export default {
    root: pathDest,
    html: {
        src: pathSrc + '/*.html',
        watch: pathSrc + '/html/**/*.html',
        watchIndex: pathSrc + '*.html',
        dest: pathDest
    },
    style: {
        src: [pathSrc + '/styles/**/*.scss'],
        watch: pathSrc + '/styles/**/*.scss',
        dest: pathDest + '/assets/css/'
    },
    js: {
        src: pathSrc + '/js/**/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/assets/js/'
    },
    img: {
        src: pathSrc + '/images/**/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/images/**/*.{png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/assets/images/'
    },
    font: {
        src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/assets/fonts/'
    },
};