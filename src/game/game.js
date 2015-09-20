/*global marriage */
(function () {
	"use strict";

	marriage.game = marriage.game || {};

	/**
	 * Game type.
	 * @enum {string}
	 */
	marriage.game.Type = {
		elective: "volený",
		bidden: "licitovaný",
		draw: "lízaný",
		cross: "křížový"
	};


	/**
	 * Assign roles to players.
	 * @param {Array.<marriage.Player>} players
	 * @param {Array.<marriage.Role>} roles
	 */
	function assignRoles(players, roles) {
		players.forEach(function(player, index) {
			player.setRole(roles[index]);
		});
	}


	/**
	 * Creates a new instance
	 * @constructor
	 */
	marriage.Game = function (type) {
		/**
		 * @private
		 * @type {marriage.game.Type}
		 */
		this.type = type;
		/**
		 * @private
		 * @type {marriage.Dispatcher}
		 */
		this.dispatcher = marriage.Module.dispatcher;

		/**
		 * @private
		 * @type {Array.<marriage.Player>}
		 */
		this.players = [
			new marriage.Player("A"),
			new marriage.Player("B"),
			new marriage.Player("C")
		];

		assignRoles(this.players, [
			new marriage.role.Foreman(),
			new marriage.role.Centre(),
			new marriage.role.Defender()
		]);

		// 1. defender shuffles thr pack
		// 2. centre cuts the pack
		// 3. defender deals the cards - 7 to foreman, 5 to centre, 5 to oneself and then again 5, 5, 5
		// 4. foreman takes first group of seven cards and selects trump (or do the election from pack of 5 cards)
		// 5. foreman creates the talon and asks others for the contract
		// 6. when answer from both (centre and defender) is ok, foreman shows trump and announce contract
		// 7. contract can be suit, betl or durch
		// 8. there can be some bonuses - 7, 107 (7 against)
		// 9. Flek
		// 10. game

		// Betl / durch
		// When somebody picks up the talon, it means that contract is rejected and he wants to play betl or durch
		// If betl has been announced, another player can reject it and play durch
	};

	/**
	 * Play a game.
	 */
	marriage.Game.prototype.play = function () {
		this.dispatcher.dispatchEvent(new marriage.event.Pre());
	};

	/**
	 * Switch roles.
	 */
	marriage.Game.prototype.switchRoles = function () {
		var roles = [];

		this.players.forEach(function (player) {
			roles.push(player.getRole());
		});
		roles.unshift(roles.pop());
		assignRoles(this.players, roles);
	};
}());