// ================================================================================
// GRUNT CONFIG: BROWSERSYNC
// Starts a server, then live injects file changes into all instances of the server.
// grunt-browser-sync
// http://www.browsersync.io/docs/grunt/
// ================================================================================

module.exports = function(grunt) {
  'use strict';
  grunt.config('browserSync', {
    files: {
      src: [
        '<%= gruntScope.distHtmlFiles %>',
        '<%= gruntScope.distMainCssFile %>',
        '<%= gruntScope.distMainJsFile %>',
        'dist/data.js'
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: 'dist/'
      }
    }
  });
};
