module.exports = function (grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compilação do LESS
        less: {
            development: {
                files: {
                    "dev/styles/main.min.css": "src/styles/main.less"
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        // Minificação do JavaScript
        uglify: {
            options: {
                mangle: true // Renomeia variáveis para reduzir tamanho
            },
            build: {
                files: {
                    'dev/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        },

        // Observa alterações nos arquivos
        watch: {
            estilos: {
                files: ['styles/**/*.less'],
                tasks: ['less'],
            },
            scripts: {
                files: ['scripts/**/*.js'],
                tasks: ['uglify'],
            }
        }
    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tarefa padrão
    grunt.registerTask('default', ['less', 'uglify']);
    grunt.registerTask('development',['less:development']);
    grunt.registerTask('build', ['less:production']);
};
