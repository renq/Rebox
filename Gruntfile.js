module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
	  uglify: {
		options: {
          compress: true,
          mangle: true,
          report: 'gzip'
          //beautify: true
	    },
	    my_target: {
	      files: {
	        'build/rebox.min.js': [
	                               'src/js/core.js',
	                               'src/js/container.js',
	                               'src/js/curtain.js',
	                               'src/js/input-parser.js',
	                               'src/js/image.js',
	                               ]
	      }
	    }
	  }
	});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('default', ['concat', 'min', 'cssmin']);

};
