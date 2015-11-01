var gulp = require("gulp");

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

gulp.task("build", ["copy-html"]);

gulp.task("watch", ["copy-html:watch"]);