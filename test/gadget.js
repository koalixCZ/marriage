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

	it("objectToArray returns an empty array for null argument", function () {
		expect(marriage.Gadget.objectToArray(null).constructor).toBe([].constructor);
		expect(marriage.Gadget.objectToArray(null).length).toBe(0);
	});

	it("objectToArray returns an empty array for undefined argument", function () {
		//noinspection JSCheckFunctionSignatures
		expect(marriage.Gadget.objectToArray().constructor).toBe([].constructor);
		//noinspection JSCheckFunctionSignatures
		expect(marriage.Gadget.objectToArray().length).toBe(0);
	});

	it("objectToArray returns object's own properties as an array", function () {
		var array = marriage.Gadget.objectToArray({a: "a", b: "b", c: "c"});

		expect(array.constructor).toBe([].constructor);
		expect(array.length).toBe(3);
		expect(array.indexOf("a")).not.toBe(-1);
		expect(array.indexOf("b")).not.toBe(-1);
		expect(array.indexOf("c")).not.toBe(-1);
	});
});