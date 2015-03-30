/*global marriage*/
(function () {
	"use strict";

	/**
	 * Creates a new instance of Dispatcher.
	 * @constructor
	 */
	marriage.Dispatcher = function () {
		/**
		 * @private
		 * @type {Object.<marriage.EventName, marriage.Event>}
		 */
		this.events = {};
	};

	/**
	 * Registers a new event.
	 * @param {marriage.EventName} eventName
	 */
	marriage.Dispatcher.prototype.registerEvent = function (eventName) {
		if (!this.isEventRegistered(eventName)) {
			this.events[eventName] = new marriage.Event(eventName);
		}
	};

	/**
	 * Dispatches the event.
	 * @param {marriage.EventName} eventName
	 * @param {object} eventArgs
	 * @throws {marriage.Error.EventNotRegistered}
	 */
	marriage.Dispatcher.prototype.dispatchEvent = function (eventName, eventArgs) {
		if (!this.isEventRegistered(eventName)) {
			throw marriage.Error.EventNotRegistered;
		}

		var event = this.events[eventName];
		event.dispatch(eventArgs);
	};

	/**
	 * Adds an event listener. Adds the event when it is not registered yet.
	 * @param {marriage.EventName} eventName
	 * @param {function} callback
	 */
	marriage.Dispatcher.prototype.addEventListener = function (eventName, callback) {
		this.registerEvent(eventName);

		var event = this.events[eventName];
		event.register(callback);
	};

	/**
	 * Returns true when the event has been registered.
	 * @param {marriage.EventName} eventName
	 * @return {boolean} true when event is registered
	 */
	marriage.Dispatcher.prototype.isEventRegistered = function (eventName) {
		var event = this.events[eventName];
		return !!(event && event.constructor === marriage.Event);
	};
}());