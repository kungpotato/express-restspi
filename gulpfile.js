var gulp = require('gulp')
var nodemon = require('gulp-nodemon')
// var env = require('gulp-env')
// var gulpMocha = require('gulp-mocha')

gulp.task('default', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  })
    .on('restart', () => {
      console.log('Restarting')
    })
})

// gulp.task('test', function(){
//     env({vars: {ENV:'Test'}});
//     gulp.src('tests/*.js', {read: false})
//         .pipe(gulpMocha({reporter: 'nyan'}))
// });
