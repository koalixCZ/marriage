/*global marriage */
(function () {
	"use strict";

	/**
	 * I do not like utils, but time to time it is useful to reach for a simple tool or a gadget.
	 * @constructor
	 */
	marriage.Gadget = function () {
	};

	/**
	 * Returns true if the argument is a function.
	 * @static
	 * @param {*} arg
	 * @return {boolean}
	 */
	marriage.Gadget.isFunction = function (arg) {
		return typeof arg === "function";
	};

	/**
	 * Returns object's own enumerable properties as an array.
	 * @param {object} obj
	 * @return {Array}
	 */
	marriage.Gadget.objectToArray = function (obj) {
		if (obj === null || obj === undefined) {
			return [];
		}

		return Object.keys(obj).map(function (key) {
			return obj[key];
		});
	};
}());