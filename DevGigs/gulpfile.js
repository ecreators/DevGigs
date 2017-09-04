// package.json/devDependencies
var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");

var tsProject = ts.createProject("tsconfig.json");

// Schritt 1 "default"
gulp.task("default", function() {
    // wenn der Code geändert wird, wird er hiermit in "app" vorbereitet
    return tsProject.src()
        // Quelldateien holen
        .pipe(sourcemaps.init())
        // Kompilieren
        .pipe(tsProject())
        // Scripts schreiben
        .pipe(sourcemaps.write("."))
        // extrahieren nach "app"
        .pipe(gulp.dest("app"));
});

// Schritt 2 "dev", führt "default" (Schritt 1: Kompilieren) aus, wenn sich
// Änderung im Ordner "app" ergeben an Dateien mit Endung ".ts"
gulp.task('dev',
    function() {
        gulp.watch("app/**/*.ts", ['default']);
    });

// Zum Ausprobieren per CMD

// CMD> cd Project-Ordner
// CMD> node_modules\.bin\gulp default   // < Ruft den Task "Default" auf
// oder
// CMD> node_modules\.bin\gulp   // < Ruft den Task "Default" auf

// Man muss einmal den 2. Task laufen lassen,
// Ab diesem Moment werden alle Änderungen an ts Dateien in "app" erkannt und kompiliert
// (die Seite wird erneuert)