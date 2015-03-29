/*global marriage, describe, expect, it, ok*/
describe("The event names", function () {
	"use strict";

	/**
	 * Returns an array of duplicate entry.
	 * @param {Array.<string>} array
	 * @param {function} transformation
	 * @return {Array.<string>}
	 */
	function getDuplicateEntry(array, transformation) {
		var sorted = array.sort(),
			length = array.length - 1,
			results = [],
			i;

		for (i = 0; i < length - 1; i++) {
			if (transformation(sorted[i + 1]) === transformation(sorted[i])) {
				results.push(sorted[i]);
			}
		}
		return results;
	}


	it("All event names are valid", function () {
		var events = marriage.Gadget.objectToArray(marriage.EventName);

		events.forEach(function (eventName) {
			expect(typeof eventName).toBe("string");
			expect(eventName.trim().length).not.toBe(0);
		});
	});

	it("All event names are unique", function () {
		var events = marriage.Gadget.objectToArray(marriage.EventName),
			duplicity = getDuplicateEntry(events, function (str) {
				return str;
			});

		expect(duplicity).toEqual([]);
	});

	it("There is not any case sensitive trap", function () {
		var events = /*convertArrayToLowerCase(*/marriage.Gadget.objectToArray(marriage.EventName),//),
			duplicity = getDuplicateEntry(events, function (str) {
				return str.toLowerCase();
			});

		expect(duplicity).toEqual([]);
	});
});