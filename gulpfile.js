/**
* gulp 
* @date 2016-05-10 10:55:24
* @author Allenice <994298628@qq.com>
* @link http://www.allenice233.com
*/


'use strict'


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    filter = require('gulp-filter'),
    postcss = require('gulp-postcss'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload
    ;

var filePath = {
    sass: './style/sass/**/*.scss'
}

var processors = [
    require('autoprefixer')({
        browsers: ['> 1%']
    }),
    require('postcss-assets')({
        relative: true,
        loadPaths: ['./images']
    }),
    require('postcss-at2x')(),
];


gulp.task('sass', function() {
    
    return gulp.src(filePath.sass)
        .pipe(sourcemaps.init())
        .pipe(sass.sync({
            includePaths: ['./style/sass/env/dev']
        }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./', {sourceRoot: '../sass'}))
        .pipe(gulp.dest('./style/css/'))
        .pipe(filter('**/*.css'))
        .pipe(reload({stream: true}))
        ;
});

// product
gulp.task('sass:prod', function() {
    return gulp.src(filePath.sass)
        .pipe(sass.sync({
            outputStyle: 'compressed',
            includePaths: ['./style/sass/env/prod']
        }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./style/css/'));
});

gulp.task('default', ['sass'], function() {
    browserSync.init({
        server: "./",
        port: 2017
    });
    gulp.watch(filePath.sass, ['sass']);
    gulp.watch(['build/**/*.js', './index.html']).on('change', reload);
});

gulp.task('build', ['sass:prod'])
