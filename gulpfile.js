// Include gulp
var gulp = require('gulp');
 // Define base folders
var src = 'src/';
var dest = 'build/';
 // Include plugins
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

 // Convert ES6 to ES5, Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([src + 'lib/DOM.js', src + 'js/*.js'])
      .pipe(babel())
      .pipe(concat('main.js'))
      //.pipe(uglify())
      .pipe(gulp.dest(dest + 'js'));
});

// Compile CSS from less files
gulp.task('less', function(){
    return gulp.src('src/less/style.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
  return gulp.src(src + 'images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});

 // Watch for changes in files
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(src + 'js/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch(src + 'less/*.less', ['less']);
   // Watch image files
  gulp.watch(src + 'images/**/*', ['images']);
 });

 // Default Task
gulp.task('default', ['scripts', 'less', 'images', 'watch']);
