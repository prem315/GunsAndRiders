
module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',
          'assets/stylesheets/city.css': 'assets/stylesheets/src/city.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'cssmin'],
      }
    },

  cssmin: {
    target: {
      files: {
         'assets/stylesheets/app.min.css' : 
         ['assets/stylesheets/common.css', 
          'assets/stylesheets/land.css',
          'assets/stylesheets/city.css'
         ]
      }
    }
  }


  });
  

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin','watch']);

}