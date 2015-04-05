/*global marriage, describe, it, expect*/
describe("The modules", function () {
	"use strict";

	it("One instance of the Dispatcher is returned by getter Module.dispatcher", function () {
		var a = marriage.Module.dispatcher,
			b = marriage.Module.dispatcher;

		expect(a).toBe(b);
	});
});