/*global marriage*/

(function () {
	"use strict";

	marriage.event = marriage.event || {};

	/**
	 * Creates a new instance of the 'pre' event.
	 * @constructor
	 */
	marriage.event.Up = function () {
	};

	marriage.event.Up.prototype = new marriage.Event(marriage.event.Name.up);
}());