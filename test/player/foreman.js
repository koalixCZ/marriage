/*global marriage, describe, it, expect*/
describe("The foreman", function () {
	"use strict";

	it("The foreman role name is... foreman? ;)", function () {
		expect(new marriage.role.Foreman().getRoleName()).toEqual(marriage.role.RoleName.foreman);
	});
});