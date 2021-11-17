const gulp = require('gulp');
const iconfont = require('gulp-iconfont');

gulp.task('build:font', () => {
    return gulp.src(['icons/*.svg'])
        .pipe(iconfont({
            fontName: 'IconFont',
            formats: ['ttf'],
            prependUnicode: false,
            normalize:true,
            fontHeight: 1001
         }))
        .on('glyphs', function(glyphs, options) {
            console.log(glyphs, options);
        })
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest('../../../Assets/Resources/Fonts/'));
});

