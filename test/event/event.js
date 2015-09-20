/*global marriage, beforeEach, describe, expect, it, spyOn*/
describe("The event", function () {
	"use strict";

	it("It is possible to create a new Event", function () {
		expect(function () {
			new marriage.Event(marriage.event.Name.pre);
		}).not.toThrow();
	});

	it("Create a new Event", function () {
		expect(function () {
			new marriage.Event(marriage.event.Name.pre);
		}).not.toThrow();
	});

	it("An event object returns name", function () {
		var event = new marriage.event.Pre();
		expect(event.getName()).toBe(marriage.event.Name.pre);
	});

	it("The method toString() contains the event name in any form", function () {
		var event = new marriage.event.Pre();

		expect(event.toString().indexOf("Event: " + event.getName())).toBe(0);
	});
});