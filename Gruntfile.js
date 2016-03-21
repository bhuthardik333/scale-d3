var d3PluginFiles = [
    'node_modules/d3-array/build/d3-array.js',
    'node_modules/d3-collection/build/d3-collection.js',
    'node_modules/d3-color/build/d3-color.js',
    'node_modules/d3-format/build/d3-format.js',
    'node_modules/d3-interpolate/build/d3-interpolate.js',
    'node_modules/d3-time/build/d3-time.js',
    'node_modules/d3-time-format/build/d3-time-format.js',
    'node_modules/d3-scale/build/d3-scale.js'
];

// Gruntfile.js
module.exports = function (grunt) {
   
   	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	concat: {
            default: {
                src: d3PluginFiles,
                dest: 'build/d3-scale.js'
            }
        },
        uglify: {
            default: {
                files: {
                    'build/d3-scale.min.js': ['build/d3-scale.js']
                }
            }
        }
    });

  	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['concat:default','uglify:default']);    
}