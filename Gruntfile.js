module.exports = function (grunt) {
    // Configuration things go here.
    require('jit-grunt')(grunt, {

    });



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
        },
        copy: {
            dev: {
                files: [
                    {src: 'index.html', dest: 'dev/'},
                    {src: ['templates/**', 'js/**'], dest:'dev/'}
                ]
            },
            dist: {
                files: [
                    {src: 'index.html', dest: 'dist/'},
                    {src: ['templates/**', 'js/**'], dest:'dist/'}
                ]
            }
        },
        clean: {
            dev: ['./dev'],
            dist: ['./dist']
        },
        connect: {
            dist: {
                options: {
                    port: 8080,
                    base: 'dist',
                    keepalive: true
                }
            }
        }
    });

    // define task
    grunt.registerTask('echo', function () {
        grunt.log.write('Hello World');
    });
    grunt.registerTask('default',[
        'build'
    ]);

    grunt.registerTask('build', [
          'echo',
          'clean',
          'wiredep',
          'copy:dist'
    ]);

    grunt.registerTask('serve', function () {
        return grunt.task.run(['build', 'connect:dist']);
    });
};