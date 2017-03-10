(function(){

	'use strict';

	//vars
	var gulp = require('gulp'),

	plugins = require('gulp-load-plugins'),

	config = {
		timestamp: new Date().getTime(),
		paths: {
			base: __dirname + '/',
			src: 'src/',
			assets: 'src/assets/',
			dist: 'dist/'
		}
	};

	function getTask(task){
		return require(__dirname + '/gulp/tasks/' + task)(gulp, plugins, config);
	}

    // Default build task
    gulp.task('build', ['clean'], function (callback) {
        plugins.runSequence(
            'validateCSS',
            ['validateHTML', 'images'],
            callback
        );
    });
    
})();