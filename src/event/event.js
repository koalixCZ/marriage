/*global marriage*/
(function () {
	"use strict";

	/**
	 * Creates a new instance of Event.
	 * @param {marriage.event.Name} name
	 * @constructor
	 */
	marriage.Event = function (name){
		/**
		 * @private
		 * @type {marriage.event.Name}
		 */
		this.name = name;
	};

	/**
	 * Return a name of the event.
	 * @return {marriage.event.Name}
	 */
	marriage.Event.prototype.getName = function () {
		return this.name;
	};

	/**
	 * Returns the events as a string.
	 * @return {string}
	 */
	marriage.Event.prototype.toString = function () {
		return "Event: " + this.name;
	};
}());
