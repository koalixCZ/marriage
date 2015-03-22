/*globals module*/
module.exports = function(config) {
	"use strict";

	config.set({
		basePath: "..",
		files: [
			// source files
			"src/marriage.js",
			"src/card/card.js",
			"src/card/pack.js",
			"src/player/player.js",
			"src/player/role.js",
			"src/player/foreman.js",
			"src/player/centre.js",
			"src/player/defender.js",

			// tests
			"test/card/card.js",
			"test/card/pack.js",
			"test/player/player.js",
			"test/player/role.js",
			"test/player/foreman.js",
			"test/player/centre.js",
			"test/player/defender.js"
		],
		browsers: ["Chrome"],
		frameworks: ["jasmine"],
		preprocessors: {
			"src/*.js": ["coverage"]
		},
		coverageReporter: {
			type: "html",
			dir: "coverage"
		}
	});
};