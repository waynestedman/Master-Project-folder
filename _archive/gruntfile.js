module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			files: {
				expand: true,
       		cwd: '_components/js',
       		src: '**/*.js',
       		dest: 'js'
				// 'js/main.js': ['_components/js/*.js']
			} //files
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} // dev
		}, //compass
		autoprefixer: {
			//dist: {
				options: {
					browsers: ['last 3 version', '> 1%', 'ie 8']
				},
				single_file: {
					src: '_components/css/style.css',
					dest: 'style.css'
				} // single_files
			//} // dist
		}, // Auto Prefixer
		watch: {
			options: {livereload: true},
			scripts: {
				files: ['_components/js/*.js'],
				tasks: ['uglify']
			}, // scripts
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			csspostprocess: {
				files: ['_components/css/style.css'],
				tasks: ['autoprefixer']
			}, // csspostprocess
			html: {
				files: ['**/*.html']
			}, //html
			php: {
				files: ['**/*.php']
			}, //php
			css: {
				files: ['css/*.css']
			} //css
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports