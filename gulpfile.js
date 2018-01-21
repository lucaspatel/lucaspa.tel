'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('pug', function() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
    locals: require('./src/content.json')
  }))
  .pipe(gulp.dest('./dest'));
});

gulp.task('css', function() {
  return gulp.src('src/styles/*.css')
    .pipe(gulp.dest('dest/css'))
    .pipe(reload({stream:true}));
});

//fit to task css in future, perhaps move to less
gulp.task('sass', function() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dest/css'))
    .pipe(reload({stream:true}));
});

//fit to task js in future
gulp.task('js',  function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dest/js'))
    .pipe(reload({stream:true}));
});

gulp.task('img',  function() {
  return gulp.src('src/images/*')
    .pipe(gulp.dest('dest/images'))
    .pipe(reload({stream:true}));
});

gulp.task('reloadPug', ['pug'], function() {
  browserSync.reload();
});

gulp.task('default', ['pug', 'css', 'sass', 'js', 'img'], function() {
  browserSync.init({
    server: {
      baseDir: './dest',
      routes : {
            '/node_modules' : './node_modules'
        }
    },

    // open the proxied app in safari, my browser of choice
    browser: ['safari'],

    //turn off incredibly annoying prompt
    notify: false
  }).reload();

  gulp.watch('src/pug/*.pug',['reloadPug']);
  gulp.watch('src/styles/*.css', ['css']);
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
});