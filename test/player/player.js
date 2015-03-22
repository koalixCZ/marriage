/*global marriage, beforeEach, describe, expect, it */
describe("The player", function () {
	"use strict";

	var player;

	beforeEach(function () {
		player = new marriage.Player("wombat");
	});

	it("It is possible to get player's name", function () {
		expect(player.getName()).toBe("wombat");
	});

	it("It is possible to set and get the role foreman", function () {
		var role = new marriage.role.Foreman();

		player.setRole(role);
		expect(player.getRole()).toEqual(role);
	});

	it("It is possible to set and get the role defender", function () {
		var role = new marriage.role.Defender();

		player.setRole(role);
		expect(player.getRole()).toEqual(role);
	});

	it("it is possible to send and get the role of the central player", function () {
		var role = new marriage.role.Defender();

		player.setRole(role);
		expect(player.getRole()).toEqual(role);
	});
});