/*global marriage, beforeEach, describe, expect, it, spyOn*/
describe("The dispatcher", function () {
	"use strict";

	var dispatcher;

	beforeEach(function () {
		dispatcher = new marriage.Dispatcher();
	});

	it("It is possible to register a new event", function () {
		dispatcher.registerEvent(marriage.EventName.revoke);
		expect(dispatcher.events[marriage.EventName.revoke].constructor).toBe(marriage.Event);
	});

	it("An existing event will not be replaced by", function () {
		dispatcher.registerEvent(marriage.EventName.revoke);
		var event = dispatcher.events[marriage.EventName.revoke];

		dispatcher.registerEvent(marriage.EventName.revoke);
		expect(dispatcher.events[marriage.EventName.revoke]).toBe(event);
	});

	it("Dispatch an existing event", function () {
		dispatcher.registerEvent(marriage.EventName.revoke);

		spyOn(dispatcher.events[marriage.EventName.revoke], "dispatch");
		dispatcher.dispatchEvent(marriage.EventName.revoke, "wombat");

		expect(dispatcher.events[marriage.EventName.revoke].dispatch).toHaveBeenCalledWith("wombat");
	});

	it("Throws an error when trying to dispatch a non existing event", function () {
		expect(function () {
			dispatcher.dispatchEvent(marriage.EventName.revoke, function () {});
		}).toThrow(marriage.Error.EventNotRegistered);
	});

	it("Adds an event listener to the existing event", function () {
		var listener = function () {};

		dispatcher.registerEvent(marriage.EventName.revoke);
		dispatcher.addEventListener(marriage.EventName.revoke, listener);

		//noinspection JSAccessibilityCheck
		expect(dispatcher.events[marriage.EventName.revoke].callbacks[0]).toBe(listener);
	});

	it("Adds an event listener even when an the event does not exist - registers the event", function () {
		var listener = function () {};

		dispatcher.addEventListener(marriage.EventName.revoke, listener);

		//noinspection JSAccessibilityCheck
		expect(dispatcher.events[marriage.EventName.revoke].callbacks[0]).toBe(listener);
	});

	it("Returns true when the event is registered", function () {
		dispatcher.registerEvent(marriage.EventName.revoke);
		expect(dispatcher.isEventRegistered(marriage.EventName.revoke)).toBe(true);
	});

	it("Returns false when the event is not registered", function () {
		expect(dispatcher.isEventRegistered(marriage.EventName.revoke)).toBe(false);
	});
});