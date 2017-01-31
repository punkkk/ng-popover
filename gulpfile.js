const gulp = require('gulp');

const babel = require('gulp-babel');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-minify-css');

gulp.task('compress-css', function() {
	gulp.src('./src/saprun-popover.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./dist'));
});

gulp.task('compress-js', function() {
	gulp.src('./src/saprun-popover.js')
        .pipe(babel({
            presets: ['es2015']
        }))
		.pipe(minifyJS())
		.pipe(gulp.dest('./dist'))
});

gulp.task('default', () => {
    gulp.src('src/saprun-popover.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(minifyJS())
        .pipe(gulp.dest('dist'));
    gulp.src('./src/saprun-popover.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist'));
});