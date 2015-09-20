/*global marriage, describe, it, expect, spyOn */
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
			expect(marriage.game.Type.bidden).toBe("licitovaný");
			expect(marriage.game.Type.cross).toBe("křížový");
			expect(marriage.game.Type.draw).toBe("lízaný");
			expect(marriage.game.Type.elective).toBe("volený");
		});
	});

	it("Initial order of roles in game 'volený' are 'forhont, střední hráč, zadák'", function () {
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

	it("The method play fire's 'pre' event", function () {
		var game = new marriage.Game(marriage.game.Type.elective),
			dispatcher = marriage.Module.dispatcher;

		spyOn(dispatcher, "dispatchEvent");

		game.play();
		expect(dispatcher.dispatchEvent).toHaveBeenCalledWith(new marriage.event.Pre());
	});
});