'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    path: {
      // configurable paths
      client: require('./bower.json').appPath || 'public',
      dist: 'dist'
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= path.dist %>/*',
              '!<%= path.dist %>/.cfignore',
              '!<%= path.dist %>/Procfile',
              '!<%= path.dist %>/manifest.yml'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= path.client %>',
            dest: '<%= path.dist %>/public',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              'bower_components/**/*',
              'assets/images/{,*/}*.{webp}',
              'assets/fonts/**/*',
              'index.html'
            ]
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= path.dist %>/public/assets/images',
            src: ['generated/*']
          },
          {
            expand: true,
            dest: '<%= path.dist %>',
            src: [
              'package.json',
              'web.js'
            ]
          }
        ]
      }
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'copy:dist'
  ]);

  // Default task.
  grunt.registerTask('default', [
    'build'
  ]);
};
