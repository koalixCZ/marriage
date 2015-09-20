/*global marriage*/

(function () {
	"use strict";

	marriage.event = marriage.event || {};

	/**
	 * Creates a new instance of the 'pre' event.
	 * @constructor
	 */
	marriage.event.Pre = function () {
	};

	marriage.event.Pre.prototype = new marriage.Event(marriage.EventName.pre);
}());