
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cached = require('gulp-cached');
var dependents = require('gulp-dependents');
var open = require('gulp-open');

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(cached('sasscache')) // 1
        .pipe(dependents())// 2
        //.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./html/assets/css/'))
})

gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
})

gulp.task('default', function () {
    gulp.src('./html/dark-index.html', gulp.series('sass')).pipe(open());
})