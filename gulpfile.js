var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['scss']);
});


gulp.task('default', ['scss']);
