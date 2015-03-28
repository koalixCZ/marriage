/*global marriage, beforeEach, describe, expect, it*/
describe("The errors", function () {
	"use strict";

	it("There is no error without a description", function () {
		var error,
			description;

		for (error in marriage.Error) {
			//noinspection JSUnresolvedFunction
			if (marriage.Error.hasOwnProperty(error)) {
				description = marriage.Error[error];
				expect(typeof description).toBe("string");
				expect(description.trim().length).not.toBe(0);
			}
		}
	});
});