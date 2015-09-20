/*global marriage */
(function () {
	"use strict";

	marriage.event = marriage.event || {};

	/**
	 * @enum {string}
	 */
	marriage.event.Name = {
		pre: "pre",
		up: "up",
		start: "start",
		revoke: "revoke"
	};


	/**
	 * Invokes the function passed to this function
	 * @param {function(marriage.event.Name)} func
	 */
	marriage.event.doForEachEventName = function(func) {
		var names = marriage.event.Name;

		names.forEach(function(name) {
			if (names.hasOwnProperty(name)) {
				func(name);
			}
		});
	};
}());