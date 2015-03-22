/*global marriage, describe, expect, it */
describe("The role", function () {
	"use strict";

	describe("The role names", function () {
		it("Expected role names exist", function () {
			expect(marriage.role.RoleName.foreman).toEqual("forhont");
			expect(marriage.role.RoleName.defender).toEqual("zadák");
			expect(marriage.role.RoleName.centre).toEqual("střední hráč");
		});
	});

	it("All role names are supported", function () {
		var roleName,
			role;

		for (roleName in marriage.role.RoleName) { // jshint ignore:line
			role = new marriage.Role(roleName);
			expect(role.getRoleName()).toEqual(roleName);
		}
	});
});