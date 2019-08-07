'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

//App based Tasks
gulp.task('app:sass', function () {
    return gulp.src('./app/directives/scss/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('app:js', function () {
    return gulp.src([
        './app/app.js',
        './app/service/*.js',
        './app/directives/*.js',
    ])
	.pipe(concat('app.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['app:sass', 'app:js']);
