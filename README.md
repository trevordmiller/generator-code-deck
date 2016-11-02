# [DEPRECATED]

---

![Code Deck - Powerpoint for Coders](readme-images/logo.png)

_Code Deck_ is a [Yeoman generator](http://yeoman.io/) for creating code-based slideshow presentations. It was built because HTML slideshows are awesome, **but they take too long to make**. With _Code Deck_, your project is **automatically** set up so you can focus on presenting great content.



-------------------------------------------------------



## Intro Video

[View full screencast on Youtube](http://youtu.be/-VIn185iE5w)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=-VIn185iE5w
" target="_blank"><img src="readme-images/intro.gif"
alt="Code Deck video tutorial thumbnail" /></a>



-------------------------------------------------------



## Example

[See an example](http://trevordmiller.github.io/code-deck-example) of a presentation built with Code Deck.



-------------------------------------------------------



## Instructions

### **Generate**:

0. Once you have the ["Prerequistes"](#prerequisites) installed, run `npm install -g generator-code-deck` to install the _Code Deck_ Yeoman generator.
0. `cd` to the directory where you want to generate your presentation.
0. Run `yo code-deck` and answer the prompts.

### **Develop**:

0. Replace `src/images/logo.png` with your own logo.
0. Run `grunt serve`.
0. Edit the data in `src/data.js`

_Refer to the [RevealJS documentation](https://github.com/hakimel/reveal.js) for more options._



-------------------------------------------------------



## Prerequisites

Before using _Code Deck_, you need to install a few things if you don't have them already...

0. [Node](http://nodejs.org/): [download](http://nodejs.org/)
0. [Bower](http://bower.io/): `npm install -g bower`.
0. [Yeoman](http://yeoman.io/): `npm install -g yo`.
0. [Grunt](http://gruntjs.com/): `npm install -g grunt-cli`.
0. [Sass](http://sass-lang.com/): `gem install sass`.

If you run into any problems, you may need to use the `sudo` command or [reclaim ownership of your `.npm` directory](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo).



-------------------------------------------------------



## Features

- [Yeoman](http://yeoman.io/) generator for automatic customized presentation setup.
- [RevealJS](http://lab.hakim.se/reveal-js/#/) for slide animations and functionality.
- [Grunt](http://gruntjs.com/) tasks for easy development and a shareable `dist` folder.
- [BrowserSync](http://www.browsersync.io/) for live style and content injections during development.
- [Sass](http://sass-lang.com/) variables for easy branding/theming.
- [Handlebars](http://handlebarsjs.com/) templates for automatic slide creation from the data in `src/data.js`.
- [HighlightJS](https://highlightjs.org/) for easy code syntax highlighting inside of `<pre><code>` blocks.



-------------------------------------------------------



## Changelog

##### 1.3.0

- Yeoman templates now include user's GitHub data out-of-the-box.
- Added a [screencast tutorial](http://youtu.be/-VIn185iE5w).
- Added an [example](http://trevordmiller.github.io/code-deck-example).
- Providing example slide content in `src/data.js`.
- Cleaning up and updating README.

##### 1.2.0

- Moving all content to the `data` object in `data.js` for easier editing.

##### 1.1.0

- Creating a `section` template which is re-used for each `section` object in `data.js`.

##### 1.0.0

- Public release



-------------------------------------------------------



Built with ♡ by [@trevordmiller](http://www.trevordmiller.com).
