/*global marriage*/
(function () {
	"use strict";

	/**
	 * Creates a new instance of the Player.
	 * @param {string} name
	 * @constructor
	 */
	marriage.Player = function(name) {
		/**
		 * @private
		 * @type {string}
		 */
		this.name = name;
		/**
		 * @private
		 * @type {marriage.Role}
		 */
		this.role = null;
		/**
		 * @private
		 * @type {marriage.Dispatcher}
		 */
		this.dispatcher = marriage.Module.dispatcher;

		this.dispatcher.addEventListener(marriage.event.Name.pre, this.preEventHandler);
	};

	/**
	 * Returns player's name.
	 * @return {string}
	 */
	marriage.Player.prototype.getName = function () {
		return this.name;
	};

	/**
	 * Returns the player's role.
	 * @return {marriage.Role}
	 */
	marriage.Player.prototype.getRole = function () {
		return this.role;
	};

	/**
	 * Sets the player's role.
	 * @param {marriage.Role} role
	 */
	marriage.Player.prototype.setRole = function (role) {
		this.role = role;
	};

	/**
	 * Handler of the 'pre' event. When player is ready, 'up' event is dispatched.
	 * @param {marriage.event.Pre} event
	 */
	marriage.Player.prototype.preEventHandler = function (event) {
		this.dispatcher.dispatchEvent(new marriage.event.Up());
	};
}());