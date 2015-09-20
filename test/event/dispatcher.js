/*global marriage, beforeEach, describe, expect, it, spyOn*/
describe("The dispatcher", function () {
	"use strict";

	var dispatcher;

	beforeEach(function () {
		dispatcher = new marriage.Dispatcher();
	});

	it("Al events are registered in the dispatcher", function () {
		var events = dispatcher.events,
			names = marriage.EventName,
			name;

		for (name in names) {
			if (names.hasOwnProperty(name)) {
				expect(Array.isArray(events[name])).toBe(true);
			}
		}
	});

	it("Register a new event listener", function () {
		var listener = function () {};

		expect(function () {
			dispatcher.addEventListener(marriage.EventName.pre, listener);
		}).not.toThrow();
		expect(dispatcher.events[marriage.EventName.pre].indexOf(listener)).not.toBe(-1);
	});

	it("One listener cannot be registered two times", function () {
		var listener = function () {};
		dispatcher.addEventListener(marriage.EventName.pre, listener);

		expect(function () {
			dispatcher.addEventListener(marriage.EventName.pre, listener);
		}).toThrow(marriage.Error.ListenerAlreadyRegistered);
	});

	it("Dispatch an event", function () {
		var event = new marriage.event.Pre(),
			myObject = {
				listener: function () {}
			};

		spyOn(myObject, "listener");

		dispatcher.addEventListener(marriage.EventName.pre, myObject.listener);
		dispatcher.dispatchEvent(event);

		expect(myObject.listener).toHaveBeenCalledWith(event);
	});
});
