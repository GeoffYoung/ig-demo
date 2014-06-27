'use strict';


module.exports = function (grunt) {
  // require it at the top and pass in the grunt instance
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.initConfig({


    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "css/main.css": "less/main.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          compress: true
        },
        files: {
          "css/main.min.css": "less/main.less"
        }
      }
    },

    watch: {
      css: {
        files: 'less/*',
        tasks: ['less']
      }
    },

  });


  grunt.registerTask('default', ['less']);
};
