const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');


function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJavaScript() {
    return gulp.src('./source/js/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens() {
    return gulp.src('./source/contents/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}



exports.default = function() {
    gulp.watch('./source/styles/main.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/js/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/contents/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));

}
