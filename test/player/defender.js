/*global marriage, describe, it, expect*/
describe("The defender", function () {
	"use strict";

	it("The role name is defender)", function () {
		expect(new marriage.role.Defender().getRoleName()).toEqual(marriage.role.RoleName.defender);
	});
});