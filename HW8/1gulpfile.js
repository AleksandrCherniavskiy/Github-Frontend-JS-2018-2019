//gulp 3.9v
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('./css/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});		

gulp.task('sass:watch', function() {
	gulp.watch('./css/**/*.scss', ['sass']);
});