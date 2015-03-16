/* global marriage */
(function () {
	"use strict";

	marriage.player = marriage.player || {};

	/**
	 *
	 * @constructor
	 */
	marriage.player.Defender = function () {

	};

	marriage.player.Defender.prototype = new marriage.Player(marriage.player.Role.defender);
}());