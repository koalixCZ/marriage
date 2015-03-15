/* global marriage, beforeEach, describe, it, expect */
describe("The pack", function () {
	"use strict";

	var count,
		pack;

	beforeEach(function () {
		count = 32;
		pack = new marriage.Pack();
	});

	/**
	 * @param {marriage.card.Color} expected
	 */
	function takeCardFromPackAndCheckColor(expected) {
		expect(pack.takeCard().getColor()).toEqual(expected);
	}

	/**
	 * @param {marriage.card.Value} expected
	 */
	function takeCardFromPackAndCheckValue(expected) {
		expect(pack.takeCard().getValue()).toEqual(expected);
	}

	/**
	 * @param {Array.<marriage.Card>} a
	 * @param {Array.<marriage.Card>} b
	 */
	function containSameValues(a, b) {
		a.forEach(function (itemFromA) {
			var foundOccurrences = 0;

			b.forEach(function (itemFromB) {
				if (itemFromA === itemFromB) {
					foundOccurrences++;
				}
			});
			expect(foundOccurrences).toBe(1);
		});
	}


	it("New pack is created", function () {
		expect(pack instanceof marriage.Pack).toBeTruthy();
	});

	it("There are 32 cards in new pack", function () {
		var i;

		for (i = 0; i < count; i++) {
			expect(pack.takeCard() instanceof marriage.Card).toBeTruthy();
		}
	});

	it("An error is thrown if you try to takeCard a card from an empty pack", function () {
		var i;

		for (i = 0; i < count; i++) {
			pack.takeCard();
		}

		expect(i).toEqual(count);
		expect(function () {
			pack.takeCard();
		}).toThrow();
	});

	it("Colors in new pack are in order - žaludy, červené, zelené, kule", function () {
		var i;

		for (i = 0; i < count; i++) {
			if (i < 8) {
				takeCardFromPackAndCheckColor(marriage.card.Color.acorns);
			} else if (i >= 8 && i < 16) {
				takeCardFromPackAndCheckColor(marriage.card.Color.red);
			} else if (i >= 16 && i < 24) {
				takeCardFromPackAndCheckColor(marriage.card.Color.green);
			} else if (i >= 24 && i < 32) {
				takeCardFromPackAndCheckColor(marriage.card.Color.bells);
			}
		}
	});

	it("Values in new pack are in order - eso, král, spodek, svršek, deset, devět, osm, sedm", function () {
		var i;

		for (i = 0; i < count; i++) {
			takeCardFromPackAndCheckValue(marriage.card.Value.ace);
			takeCardFromPackAndCheckValue(marriage.card.Value.king);
			takeCardFromPackAndCheckValue(marriage.card.Value.overKnave);
			takeCardFromPackAndCheckValue(marriage.card.Value.underKnave);
			takeCardFromPackAndCheckValue(marriage.card.Value.ten);
			takeCardFromPackAndCheckValue(marriage.card.Value.nine);
			takeCardFromPackAndCheckValue(marriage.card.Value.eight);
			takeCardFromPackAndCheckValue(marriage.card.Value.seven);
			i += 7;
		}
	});

	it("Cards are in different order when pack has been cut", function () {
		var packBeforeCut,
			packAfterCut;

		packBeforeCut = pack.toString();
		pack.cut();
		packAfterCut = pack.toString();

		expect(packBeforeCut).not.toEqual(packAfterCut);
	});

	it("No card has been lost or added after cut the pack", function () {
		pack.cut();

		expect(count).toEqual(pack.pack.length);
	});

	it("After cut - every card is unique", function () {
		var packBeforeCut = pack.pack,
			packAfterCut;

		pack.cut();
		packAfterCut = pack.pack;

		containSameValues(packBeforeCut, packAfterCut);
	});

	it("No card has been lost after shuffle the pack", function () {
		pack.shuffle();

		expect(count).toEqual(pack.pack.length);
	});

	it("After shuffle - every card is unique", function () {
		var packBeforeShuffle = pack.pack,
			packAfterShuffle;

		pack.shuffle();
		packAfterShuffle = pack.pack;

		containSameValues(packBeforeShuffle, packAfterShuffle);
	});
});