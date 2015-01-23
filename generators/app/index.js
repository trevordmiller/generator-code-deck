// ================================================================================
// CODE DECK LEVEL: PAGE SUB-GENERATOR
// Scaffolds out a project with the CodeDeck default package (linting files, Grunt tasks, Bower dependencies, directory structure etc.).
// https://code.ldschurch.org/stash/projects/CODE DECK/repos/generator-reveal/browse
// http://yeoman.io/authoring/running-context.html
// ================================================================================

'use strict';



// ------------------------------------------------------------------------------
// DEPENDENCIES
// ------------------------------------------------------------------------------

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var banner = require('../../banner');



// ------------------------------------------------------------------------------
// CHALK STYLES
// https://github.com/sindresorhus/chalk
// ------------------------------------------------------------------------------

var highlightStyle = chalk.yellow;
var dividerLine = '----------------------------------------------------------';



// ------------------------------------------------------------------------------
// "PROJECT" GENERATOR PROCESS
// ------------------------------------------------------------------------------

var CodeDeckGenerator = yeoman.generators.Base.extend({

	// INIT
	initializing: function() {

		// Require root package.json to avoid npm errors
		this.pkg = require('../../package.json');

		// BANNER ASCII ART
		this.log(banner);
	},

	// COMMAND LINE PROMPTS
	prompting: function() {

		// Wait to go on to the next function until the user has answered the prompts
		var done = this.async();

		// USER INPUT
		// Using Inquirer.js
		// https://github.com/SBoudrias/Inquirer.js
		var prompts = [
			{
				type: 'input',
				name: 'mainColor',
				message: 'What should the main color of the presentation be?',
				default: '#fead4c'
			},
			{
				type: 'input',
				name: 'presentationName',
				message: 'Enter the slug for the "presentation"',
				default: 'presentation-name'
			},
			{
				type: 'input',
				name: 'presentationDescription',
				message: 'Enter a description for the presentation',
			},
			{
				type: 'input',
				name: 'githubUsername',
				message: 'What is your github username?',
				default: 'octocat'
			}
		];

		// Store user input and other variables for use in generating files from templates
		this.prompt(prompts, function (props) {

			// User input
			this.mainColor = props.mainColor;
			this.presentationName = props.presentationName;
			this.presentationDescription = props.presentationDescription;
			this.githubUsername = props.githubUsername;

			// Hack so that Yeoman wont process grunt variables that should be variables after the project has been generated
			this.yeomanReplaceTimeStamp = '<%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>';

			// Other variables to pass along
			var dateObject = new Date();
			this.currentDate = dateObject.getFullYear();
			this.humanPresentationName = this._.humanize(props.presentationName);

			// Allow the file to continue executing the next function
			done();
		}.bind(this));
	},

	// CREATE FILES & FOLDERS
	configuring: function() {

		// Alert user
		console.log('\n');
		console.log(highlightStyle('Building presentation folders and files from templates...'));
		console.log('\n');

		// Store user input and variables and use them to render the rest of the files from the templates
		var context = {
			mainColor: this.mainColor,
			presentationName: this.presentationName,
			humanPresentationName: this.humanPresentationName,
			presentationDescription: this.presentationDescription,
			githubUsername: this.githubUsername,
			currentDate: this.currentDate,
			yeomanReplaceTimeStamp: this.yeomanReplaceTimeStamp
		};

		// CREATE FILES & FOLDERS

		// ROOT
		// Root level files
		this.copy('gruntfile.js', 'gruntfile.js');
		this.copy('bowerrc', '.bowerrc');
		this.copy('gitignore', '.gitignore');
		this.copy('gitattributes', '.gitattributes');
		this.copy('editorconfig', '.editorconfig');
		this.copy('jshintrc', '.jshintrc');
		this.template('_README.md', 'README.md', context);
		this.template('_LICENSE.md', 'LICENSE.md', context);
		this.template('_package.json', 'package.json', context);
		this.template('_bower.json', 'bower.json', context);

		// GRUNT CONFIGS
		// `grunt-configs` folder and files
		this.mkdir('grunt-configs');
			this.copy('grunt-configs/autoprefixer.js', 'grunt-configs/autoprefixer.js');
			this.copy('grunt-configs/browserSync.js', 'grunt-configs/browserSync.js');
			this.copy('grunt-configs/clean.js', 'grunt-configs/clean.js');
			this.copy('grunt-configs/copy.js', 'grunt-configs/copy.js');
			this.copy('grunt-configs/handlebars.js', 'grunt-configs/handlebars.js');
			this.copy('grunt-configs/sass.js', 'grunt-configs/sass.js');
			this.copy('grunt-configs/uglify.js', 'grunt-configs/uglify.js');
			this.copy('grunt-configs/usebanner.js', 'grunt-configs/usebanner.js');
			this.copy('grunt-configs/watch.js', 'grunt-configs/watch.js');

		// SRC
		// `src` folder & files
		this.mkdir('src');

			// ROOT
			this.template('src/index.html', 'src/index.html', context);
			this.copy('src/data.js', 'src/data.js');
			this.copy('src/styles/main.scss', 'src/styles/main.scss');
			this.copy('src/scripts/main.js', 'src/scripts/main.js');
			this.copy('src/scripts/get-data.js', 'src/scripts/get-data.js');

			// HANDLEBARS TEMPLATES
			this.mkdir('src/templates');

				// Default "templates"
				this.template('src/templates/index.hbs', 'src/templates/index.hbs');
				this.template('src/templates/_start.hbs', 'src/templates/_start.hbs');
				this.template('src/templates/_section.hbs', 'src/templates/_section.hbs');
				this.template('src/templates/_end.hbs', 'src/templates/_end.hbs');

			// IMAGES
			this.mkdir('src/images');

				// Example images
				this.copy('src/images/logo.png', 'src/images/logo.png');
				this.copy('src/images/example.png', 'src/images/example.png');
	},

	// INSTALL DEPENDENCIES
	install: {

		// INSTALL BOWER DEPENDENCIES
		// This will create the 'bower_components' folder and add bower dependencies to it listed in the newly generated 'bower.json' file
		runBowerInstall: function() {

			// Wait to go on to the next function until this function is done
			var done = this.async();

			// Run "bower install"
			console.log('\n');
			console.log(highlightStyle('Running "bower install" to install the "src/bower_sections" folder and dependencies...'));
			console.log('\n');
			this.bowerInstall('', function() {

				// Allow the file to continue executing the next function
				done();
			});
		},

		// INSTALL NODE DEPENDENCIES
		// This will create the 'node_modules' folder and add node dependencies to it listed in the newly generated 'package.json' file
		runNpmInstall: function() {

			// Wait to go on to the next function until this function is done
			var done = this.async();

			// Run "npm install"
			console.log('\n');
			console.log(highlightStyle('Running "npm install" to install the "node_modules" folder and dependencies. This will take about 60 seconds...'));
			console.log('\n');
			this.npmInstall('', function() {

				// Allow the file to continue executing the next function
				done();
			});
		}
	},

	// END
	end: {

		// GOODBYE MESSAGE
		sayGoodbye: function() {
			console.log('\n');
			console.log(highlightStyle('Your presentation has been generated!'));
			console.log('\n');
			console.log(highlightStyle(dividerLine));
			console.log('\n');
		},

		// RUN GRUNT DIST
		runGruntServe: function() {

			// Run `grunt serve` to build "src" files to "dist" folder for the first time and launch a node server with live reload.
			console.log('\n');
			console.log(highlightStyle('Running "grunt serve" to build "src/" files to "dist/" folder for the first time and launch a node server with BrowserSync...'));
			console.log('\n');
			this.spawnCommand('grunt', ['serve']);
		}
	}
});



// ------------------------------------------------------------------------------
// MODULE
// ------------------------------------------------------------------------------

module.exports = CodeDeckGenerator;
