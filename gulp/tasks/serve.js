'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var baseDir =  release ? RELEASE_FOLDER + '/' : BUILD_FOLDER + '/';

module.exports = gulp.task('serve',['nodemon'], function () {
	browserSync({
		proxy: 'http://localhost:3000',
		// informs browser-sync to use the following port for the proxied app
		// notice that the default port is 3000, which would clash with our expressjs
		port: 4000
	});
});