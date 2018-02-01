'use strict';

var gulp = require('gulp');
var del = require('del');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var ghPages = require('gulp-gh-pages');
var reload = browserSync.reload;

gulp.task('watch', function () {
  gulp.watch('src/pug/*.pug',['pug', 'reload']);
  gulp.watch('src/styles/*.scss', ['sass', 'reload']);
  gulp.watch('src/js/*.js', ['js', 'reload']);
  gulp.watch('src/images/*', ['img', 'reload']);
});

gulp.task('clean', function() {
  return del.sync('dist/**', {force:true});
});

gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
    locals: require('./src/content.json'),
    pretty: true
  }))
  .pipe(gulp.dest('./dist'));
});

//fit to task css in future, perhaps move to less
gulp.task('sass', function() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream:true}));
});

//fit to task js in future
gulp.task('js',  function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream:true}));
});

gulp.task('img',  function() {
  return gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'))
    .pipe(reload({stream:true}));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('deploy', function () {
    return gulp.src('dist/**/*')
        .pipe(ghPages());
});

gulp.task('default', ['clean', 'sass', 'js', 'img', 'pug', 'watch'], function() {
  browserSync.init({
    server: {
      baseDir: './dist',
      routes : {
            '/node_modules' : './node_modules'
        }
    },

    // open the proxied app in safari, my browser of choice
    browser: ['safari'],

    //turn off incredibly annoying prompt
    notify: false
  }).reload();
});