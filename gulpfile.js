
/********************************************************************
* Imports
*******************************************************************/

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	clean = require('gulp-clean');
	uglify = require("gulp-uglify"),
	dest = "plugins/tobibeer/preview/";

/********************************************************************
* Tasks
*******************************************************************/

function myclean() {

	//empty target
	return gulp.src(dest, {read: false})
    	.pipe(clean());
}

function build() {
    // copy non-js
    gulp.src(["src/**", "!**/*.js"])
	.pipe(gulp.dest(dest));

    const options = {
	compress: true,
	output: {
	    comments: "some"
	}
    }

    // uglify js
    return gulp.src("src/**/*.js")
	.pipe(uglify(options))
	.pipe(gulp.dest(dest));
}

exports.build = gulp.series(myclean, build);
