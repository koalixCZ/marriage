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
		 * @type {Object.<marriage.event.Name, []>}
		 */
		this.events = {};
		registerEvents(this.events);
	};

	/**
	 * Dispatches the event.
	 * @param {marriage.Event} event
	 */
	marriage.Dispatcher.prototype.dispatchEvent = function (event) {
		var eventName = event.getName(),
			listeners = this.events[eventName];

		listeners.forEach(function (listener) {
			listener(event);
		});
	};

	/**
	 * Adds an event listener.
	 * @param {marriage.event.Name} eventName
	 * @param {function} listener
	 * @throws {marriage.Error.ListenerAlreadyRegistered}
	 */
	marriage.Dispatcher.prototype.addEventListener = function (eventName, listener) {
		var listeners = this.events[eventName];

		if (listeners.indexOf(listener) !== -1) {
			throw marriage.Error.ListenerAlreadyRegistered;
		}
		listeners.push(listener);
	};


	/**
	 * Registers all events.
	 * @param {Object.<marriage.event.Name, []>} events
	 */
	function registerEvents(events) {
		var names = marriage.event.Name,
			name;

		for (name in names) {
			if (names.hasOwnProperty(name)) {
				events[name] = [];
			}
		}
	}
}());