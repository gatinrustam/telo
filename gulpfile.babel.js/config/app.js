const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
    isProd: isProd,
    isDev: isDev,

    basename: {
        basename: 'main',
        suffix: '.min'
    },

    autoprefixer: {
        cascade: false,
    },

    imagemin: {
        verbose: true,
    },

    fileInclude: {
        context: {
            isProd: isProd
        }
    }
}