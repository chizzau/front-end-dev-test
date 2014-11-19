module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					// target : source
					'bin/css/style.min.css' : 'less/main.less'
				}
			}
		},

		concat: {
			options: {
				separator: "\n\n"
			},
			dist: { //distribute
				src: ['js/main.js','js/controller.js'],
				dest: 'js/script.js' 
			}/*,
			styles: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
				'bin/css/style.css'],
				dest: 'bin/css/styles.min.css'
			}*/
		},

		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'bin/js/script.min.js' : ['js/script.js']
				}
			}
		},
		
		watch: {
			styles: {
				files: ['less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify'); // to minify js
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};