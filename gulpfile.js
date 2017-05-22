var gulp        = require('gulp');
var browserSync = require('browser-sync');
var uglify      = require('gulp-uglify');
var usemin      = require('gulp-usemin');
var clean       = require('gulp-clean');

gulp.task('clean', function(){
    return gulp.src('public/index.html')
        .pipe(clean());
});

gulp.task('bs', function(){
    browserSync.init(null, {
        proxy: 'http://localhost:3000',
    });

    gulp.watch('public/**/*', function(){
        console.log('arquivo alterado');
        browserSync.reload();
    });
});

gulp.task('usemin', ['clean'], function(){
    gulp.src('/src/index.html')
        .pipe(usemin({
            js: [uglify]
        }))
            .pipe(gulp.dest('/public/index.html'));
    // gulp.watch('src/js/**/*.js', function(event){
    //     console.log('arquivo ', event.path);
    // });
});
