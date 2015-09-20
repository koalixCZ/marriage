/*global marriage*/

(function () {
	"use strict";

	marriage.event = marriage.event || {};

	/**
	 * Creates a new instance of the 'start' event.
	 * @constructor
	 */
	marriage.event.Start = function () {
	};

	marriage.event.Start.prototype = new marriage.Event(marriage.event.Name.start);
}());