module.exports = function (grunt) {
    // Configuration things go here.

    // Call grunt's configuration method passing it the configuration object
    grunt.initConfig({
        wiredep: {
            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.html'
                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    });
    // Load npm plugin tasks
    grunt.loadNpmTasks('grunt-wiredep');

    // define task
    grunt.registerTask('echo', function () {
        grunt.log.write('Hello World');
    });
    grunt.registerTask('default',[
        'echo',
        'wiredep'
    ]);
};