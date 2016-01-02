var gulp = require("gulp"),
    tslint = require('gulp-tslint');

gulp.task("default", function() {
    console.log("running");
});

gulp.task("copy-files", function() {
    gulp.src("./src/**/*.{html,js,css,svg}")
        .pipe(gulp.dest("./compiled"));
});

gulp.task("copy-files:watch", function() {
    gulp.watch("./src/**/*.{html,js,css,svg}", ["copy-files"]);
});

gulp.task("tslint", function() {
    gulp.src(["./src/**/*.ts", "!./src/typings/**/*", "!./src/collections/collections.ts"])
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task("build", ["copy-html"]);

gulp.task("watch", ["copy-files:watch"]);