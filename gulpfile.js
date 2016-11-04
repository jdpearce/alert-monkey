'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const tsb = require('gulp-tsb');

const dirs = {
  src: './src',
  dest: './build'
};

const tsConfigSrc = tsb.create('./tsconfig.json');
gulp.task('build', function () {
    return gulp.src([dirs.src + '/*'])
        .pipe(gulpif(/[.]ts$/, tsConfigSrc())) 
        .pipe(gulp.dest(dirs.dest));
});

gulp.task('default', ['build']);