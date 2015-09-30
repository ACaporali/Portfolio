var gulp = require('gulp');

var sass = require('gulp-sass');

// creation d'une nouvelle tache : 'sass' 
gulp.task('sass', function () {
	// définition de la tache
  gulp.src('src/assets/scss/**/*.scss') // définition du répertoire source
    .pipe(sass()) // exécution Sass
    .pipe(gulp.dest('./src/assets/css'));// écriture dans destination
});
 
// creation d'une nouvelle tach : 'sass:watch'
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// ici la tache par defaut
gulp.task('default', function() {
  // place code for your default task here
});