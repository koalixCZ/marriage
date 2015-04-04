/*global marriage, describe, it, expect */
describe("The game", function() {
	"use strict";

	/**
	 * Returns role name of player on specified index
	 * @param {Array.<marriage.Player>} players
	 * @param {number} index
	 * @return {marriage.role.RoleName}
	 */
	function getRoleNameOnIndex(players, index) {
		return players[index].getRole().getRoleName();
	}

	describe("The types", function () {
		it("Expected game types exist", function () {
			expect(marriage.game.Type.bidden).toBe("licitovan�");
			expect(marriage.game.Type.cross).toBe("k��ov�");
			expect(marriage.game.Type.draw).toBe("l�zan�");
			expect(marriage.game.Type.elective).toBe("volen�");
		});
	});

	it("Initial order of roles in game 'volen�' are 'forhont, st�edn� hr��, zad�k'", function () {
		//noinspection JSAccessibilityCheck
		var game = new marriage.Game(marriage.game.Type.elective),
			players = game.players;

		expect(getRoleNameOnIndex(players, 0)).toBe(marriage.role.RoleName.foreman);
		expect(getRoleNameOnIndex(players, 1)).toBe(marriage.role.RoleName.centre);
		expect(getRoleNameOnIndex(players, 2)).toBe(marriage.role.RoleName.defender);
	});

	it("Roles rotate regularly", function () {
		//noinspection JSAccessibilityCheck
		var game = new marriage.Game(marriage.game.Type.elective),
			players = game.players;

		expect(getRoleNameOnIndex(players, 0)).toBe(marriage.role.RoleName.foreman);
		expect(getRoleNameOnIndex(players, 1)).toBe(marriage.role.RoleName.centre);
		expect(getRoleNameOnIndex(players, 2)).toBe(marriage.role.RoleName.defender);

		game.switchRoles();
		//noinspection JSAccessibilityCheck
		players = game.players;
		expect(getRoleNameOnIndex(players, 0)).toBe(marriage.role.RoleName.defender);
		expect(getRoleNameOnIndex(players, 1)).toBe(marriage.role.RoleName.foreman);
		expect(getRoleNameOnIndex(players, 2)).toBe(marriage.role.RoleName.centre);

		game.switchRoles();
		//noinspection JSAccessibilityCheck
		players = game.players;
		expect(getRoleNameOnIndex(players, 0)).toBe(marriage.role.RoleName.centre);
		expect(getRoleNameOnIndex(players, 1)).toBe(marriage.role.RoleName.defender);
		expect(getRoleNameOnIndex(players, 2)).toBe(marriage.role.RoleName.foreman);

		game.switchRoles();
		//noinspection JSAccessibilityCheck
		players = game.players;
		expect(getRoleNameOnIndex(players, 0)).toBe(marriage.role.RoleName.foreman);
		expect(getRoleNameOnIndex(players, 1)).toBe(marriage.role.RoleName.centre);
		expect(getRoleNameOnIndex(players, 2)).toBe(marriage.role.RoleName.defender);
	});
});