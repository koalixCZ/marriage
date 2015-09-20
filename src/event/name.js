/*global marriage */
(function () {
	"use strict";

	marriage.event = marriage.event || {};

	/**
	 * @enum {string}
	 */
	marriage.EventName = {
		pre: "pre",
		up: "up",
		start: "start",
		revoke: "revoke"
	};


	/**
	 * Invokes the function passed to this function
	 * @param {function(marriage.EventName)} func
	 */
	marriage.event.doForEachEventName = function(func) {
		var names = marriage.EventName;

		names.forEach(function(name) {
			if (names.hasOwnProperty(name)) {
				func(name);
			}
		});
	};
}());