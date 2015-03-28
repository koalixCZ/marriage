/*global marriage*/
(function () {
	"use strict";

	/**
	 * Creates a new instance of Event.
	 * @param {string} name
	 * @constructor
	 */
	marriage.Event = function (name){
		/**
		 * @private
		 * @type {string}
		 */
		this.name = name;

		/**
		 * @private
		 * @type {Array.<function>}
		 */
		this.callbacks = [];
	};

	/**
	 * Registers a callback.
	 * @param {function} callback
	 * @throws {marriage.Error.InvalidArgumentException}
	 */
	marriage.Event.prototype.register = function (callback) {
		if (!marriage.Gadget.isFunction(callback)) {
			throw marriage.Error.InvalidArgumentException;
		}
		this.callbacks.push(callback);
	};

	/**
	 * Dispatches the event.
	 * @param {*} eventArgs
	 */
	marriage.Event.prototype.dispatch = function (eventArgs) {
		var callbacks = this.callbacks,
			length = callbacks.length,
			i;

		for (i = 0; i < length; i++) {
			callbacks[i](eventArgs);
		}
	};
}());
