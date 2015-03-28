/*globals module*/
module.exports = function(config) {
	"use strict";

	config.set({
		basePath: "..",
		files: [
			// source files
			"src/marriage.js",
			"src/error.js",
			"src/gadget.js",
			"src/card/card.js",
			"src/card/pack.js",
			"src/event/event.js",
			"src/player/player.js",
			"src/player/role.js",
			"src/player/foreman.js",
			"src/player/centre.js",
			"src/player/defender.js",

			// tests
			"test/error.js",
			"test/gadget.js",
			"test/card/card.js",
			"test/card/pack.js",
			"test/event/event.js",
			"test/player/player.js",
			"test/player/role.js",
			"test/player/foreman.js",
			"test/player/centre.js",
			"test/player/defender.js"
		],
		browsers: ["Chrome"],
		frameworks: ["jasmine"],
		preprocessors: {
			"src/*.js": ["coverage"],
			"src/card/*.js": ["coverage"],
			"src/event/*.js": ["coverage"],
			"src/game/*.js": ["coverage"],
			"src/player/*.js": ["coverage"]
		},
		coverageReporter: {
			type: "html",
			dir: "coverage"
		}
	});
};