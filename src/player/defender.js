/* global marriage */
(function () {
	"use strict";

	marriage.role = marriage.role || {};

	/**
	 * Creates a new instance of Defender.
	 * @constructor
	 */
	marriage.role.Defender = function () {
	};

	marriage.role.Defender.prototype = new marriage.Role(marriage.role.RoleName.defender);

	/**
	 * Shuffles the pack of cards/
	 */
	marriage.role.Defender.prototype.shuffle = function () {
		throw "Not implemented";
	};
}());