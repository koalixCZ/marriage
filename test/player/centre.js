/*global marriage, describe, it, expect*/
describe("The centre", function () {
	"use strict";

	it("The role name is centre)", function () {
		expect(new marriage.role.Centre().getRoleName()).toEqual(marriage.role.RoleName.centre);
	});
});