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
}());