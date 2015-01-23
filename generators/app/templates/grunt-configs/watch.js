// ================================================================================
// GRUNT CONFIG: WATCH
// Continuously watches and live reloads with file changes.
// grunt-contrib-watch
// https://github.com/gruntjs/grunt-contrib-watch
// ================================================================================

module.exports = function(grunt) {
	'use strict';
	grunt.config('watch', {
		html: {
			files: [
				'<%= gruntScope.srcHtmlFiles %>'
			],
			tasks: [
				'handlebars',
				'copy',
				'usebanner'
			]
		},
		handlebars: {
			files: [
				'<%= gruntScope.srcHandlebarsFiles %>'
			],
			tasks: [
				'handlebars',
				'copy',
				'usebanner'
			]
		},
		sass: {
			files: [
				'<%= gruntScope.srcSassFiles %>'
			],
			tasks: [
				'sass:dist',
				'autoprefixer'
			]
		},
		js: {
			files: [
				'<%= gruntScope.srcJsFiles %>'
			],
			tasks: [
				'uglify:dist'
			]
		},
		images: {
			files: [
				'<%= gruntScope.srcImageFiles %>'
			],
			tasks: [
			]
		},
		data: {
			files: [
				'<%= gruntScope.dataFiles %>'
			],
			tasks: [
				'copy:data'
			]
		}
	});
};
