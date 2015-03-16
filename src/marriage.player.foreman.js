/*global marriage */
(function () {
	"use strict";

	marriage.player = marriage.player || {};

	/**
	 *
	 * @constructor
	 */
	marriage.player.Foreman = function () {

	};

	marriage.player.Foreman.prototype = new marriage.Player(marriage.player.Role.foreman);

}());