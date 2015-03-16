/*global marriage*/
(function () {
	"use strict";

	marriage.player = marriage.player || {};

	/**
	 * @enum {string}
	 */
	marriage.player.Role = {
		foreman: "forhont",
		defender: "zadák",
		player: "hráč"
	};

	/**
	 *
	 * @param {marriage.player.Role} role
	 * @constructor
	 */
	marriage.Player = function(role) {
		/**
		 * @private
		 * @type {marriage.player.Role}
		 */
		this.role = role;
	};

	/**
	 * Returns the player's role.
	 * @return {marriage.player.Role}
	 */
	marriage.Player.prototype.getRole = function () {
		return this.role;
	};
}());