/*global marriage, beforeEach, describe, expect, it*/
describe("The errors", function () {
	"use strict";

	it("There is no error without a description", function () {
		var errors = marriage.Gadget.objectToArray(marriage.Error);

		errors.forEach(function (description) {
			expect(typeof description).toBe("string");
			expect(description.trim().length).not.toBe(0);
		});
	});
});