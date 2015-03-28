/*global marriage, beforeEach, describe, expect, it, spyOn*/
describe("The event", function () {
	"use strict";

	var event;

	beforeEach(function () {
		event = new marriage.Event("myTestEvent");
	});

	it("Register callback to the event", function () {
		var callback = function() {};
		event.register(callback);

		expect(event.callbacks.indexOf(callback)).not.toBe(-1);
	});

	it("Throws an error if callback is not a function", function () {
		expect(function () {
			event.register(null);
		}).toThrow(marriage.Error.InvalidArgumentException);
	});

	it("Nothing happens when dispatch an event without any callback", function () {
		expect(function () {
			event.dispatch("an argument");
		}).not.toThrow();
	});

	it("Invokes all registered callbacks", function () {
		var obj = {
				one: function () {},
				two: function () {}
			},
			arg = "123";

		spyOn(obj, "one");
		spyOn(obj, "two");

		event.register(obj.one);
		event.register(obj.two);
		event.dispatch(arg);

		expect(obj.one).toHaveBeenCalledWith(arg);
		expect(obj.two).toHaveBeenCalledWith(arg);
	});
});