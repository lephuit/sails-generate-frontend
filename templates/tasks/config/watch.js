/**
 * Watch for changes on files in the `assets` folder,
 * and re-run the appropriate tasks.
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		api: {

			// API files to watch:
			files: ['api/**/*']
		},
		assets: {

			// Assets to watch:
			files: ['assets/**/*'],

			// When assets are changed:
			tasks: ['syncAssets' <%- linker ? ", 'linkAssets'" : '' %>]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
