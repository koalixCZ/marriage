/*global marriage, describe, expect, it */
describe("The gadget", function () {
	"use strict";

	it("isFunction returns true only when argument is... a function", function () {
		expect(marriage.Gadget.isFunction(function() {})).toBe(true);
		expect(marriage.Gadget.isFunction(new Function("a", "b", "return a + b"))).toBe(true); // jshint ignore:line

		//noinspection JSCheckFunctionSignatures
		expect(marriage.Gadget.isFunction()).toBe(false);
		expect(marriage.Gadget.isFunction(null)).toBe(false);
		expect(marriage.Gadget.isFunction(1)).toBe(false);
		expect(marriage.Gadget.isFunction(1.23)).toBe(false);
		expect(marriage.Gadget.isFunction({})).toBe(false);
		expect(marriage.Gadget.isFunction("function")).toBe(false);
	});
});