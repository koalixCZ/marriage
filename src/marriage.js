var marriage = {};

(function () {
	"use strict";

	/**
	 * Creates a new instance of Marriage.
	 * @constructor
	 */
	marriage.Marriage = function () {
	};

	/**
	 * Starts a new game.
	 * @param {marriage.game.Type} type
	 */
	marriage.Marriage.startGame = function (type) {
		switch (type) {
		case marriage.game.Type.elective:
			new marriage.Game(type).start();
			break;
		case marriage.game.Type.bidden:
		case marriage.game.Type.cross:
		case marriage.game.Type.draw:
			throw marriage.Error.NotImplementedException;
		}
	};
}());