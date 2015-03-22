/*global marriage*/
(function () {
	"use strict";

	marriage.player = marriage.player || {};

	/**
	 * Creates a new instance of the Player.
	 * @param {marriage.player.Role} role
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
}());