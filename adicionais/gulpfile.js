var gulp = require('gulp');
var gulpTs = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
gulp.task('default', ['compile','watch',  'reload']);

gulp.task('compile', function () {
    var tsConfig = gulpTs.createProject('tsconfig.json');

    return gulp.src('src/**/*.ts')
        .pipe(gulpTs(tsConfig))
        .pipe(gulp.dest('lib'));
});

gulp.task('reload', function () {
   return nodemon({script: 'lib/index.js'}); 
});


gulp.task('watch', function (){
   return gulp.watch('src/**/*.ts', ['compile']); 
});