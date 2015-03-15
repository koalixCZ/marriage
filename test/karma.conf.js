/*globals module*/
module.exports = function(config) {
	"use strict";

	config.set({
		basePath: "..",
		files: [
			// source files
			"src/marriage.js",
			"src/marriage.card.js",
			"src/marriage.pack.js",

			// tests
			"test/marriage.card.js",
			"test/marriage.pack.js"
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