/* global marriage */
(function () {
	"use strict";

	marriage.game = marriage.game || {};

	/**
	 * Points awarded.
	 * @enum {number}
	 */
	marriage.game.Points = {
		ace: 10,
		ten: 10,
		lastTrick: 10,
		marriage: 20,
		trumpMarriage: 40
	};

	/**
	 * Multiplier of payment - the rules of Czech Marriage Association.
	 * @enum {number}
	 */
	marriage.game.PaymentCMARules = {
		suit: 1,
		unannouncedSeven: 1,
		announcedSeven: 2,
		unannouncedHundred: 2,
		announcedHundred: 4,
		betl: 15,
		durch: 40,
		twiceSeven: 100
	};
}());
