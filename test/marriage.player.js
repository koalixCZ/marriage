/*global marriage, describe, expect, it */
describe("The player", function () {
	"use strict";

	describe("The roles", function () {
		it("Expected roles exist", function () {
			expect(marriage.player.Role.foreman).toEqual("forhont");
			expect(marriage.player.Role.defender).toEqual("zadák");
			expect(marriage.player.Role.player).toEqual("hráč");
		});
	});

	var player;

	it("It is possible to get player's role", function () {
		player = new marriage.Player(marriage.player.Role.foreman);

		expect(player.getRole()).toEqual(marriage.player.Role.foreman);
	});
});