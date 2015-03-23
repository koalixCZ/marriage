/*global describe, expect, it, marriage */
describe("The cards", function () {
	"use strict";

	describe("The values", function () {
		it("Expected values exist", function () {
			expect(marriage.card.Value.seven).toBe("sedm");
			expect(marriage.card.Value.eight).toBe("osm");
			expect(marriage.card.Value.nine).toBe("devět");
			expect(marriage.card.Value.ten).toBe("deset");
			expect(marriage.card.Value.underKnave).toBe("spodek");
			expect(marriage.card.Value.overKnave).toBe("svršek");
			expect(marriage.card.Value.king).toBe("král");
			expect(marriage.card.Value.ace).toBe("eso");
		});
	});

	describe("The suits", function () {
		it("Expected suits exist", function () {
			expect(marriage.card.Suit.bells).toBe("kule");
			expect(marriage.card.Suit.green).toBe("zelené");
			expect(marriage.card.Suit.red).toBe("červené");
			expect(marriage.card.Suit.acorns).toBe("žaludy");
		});
	});

	describe("The card", function () {

		var card;

		it("It is possible to create specific card - the red ace", function () {
			card = new marriage.Card(marriage.card.Suit.red, marriage.card.Value.ace);

			expect(card instanceof marriage.Card).toBeTruthy();
		});

		it("It is possible to get the card value", function () {
			card = new marriage.Card(marriage.card.Suit.red, marriage.card.Value.seven);

			expect(card.getValue()).toBe(marriage.card.Value.seven);
		});

		it("It is possible to get the card suit", function () {
			card = new marriage.Card(marriage.card.Suit.green, marriage.card.Value.ten);

			expect(card.getSuit()).toBe(marriage.card.Suit.green);
		});

		it("it is not possible to create a card with an invalid value", function () {
			expect(function () {
				//noinspection JSCheckFunctionSignatures
				new marriage.Card(marriage.card.Suit.acorns, "twenty");
			}).toThrow();
		});

		it("It is not possible to create a card with an invalid suit", function () {
			expect(function () {
				//noinspection JSCheckFunctionSignatures
				new marriage.Card("white", marriage.card.Value.ten);
			}).toThrow();
		});

		it("It is not possible to create a card with an invalid value and suit", function () {
			expect(function () {
				//noinspection JSCheckFunctionSignatures
				new marriage.Card("a", "b");
			}).toThrow();
		});

		it("The toString method returns suit and value", function () {
			var suit = marriage.card.Suit.red,
				value = marriage.card.Value.ace;

			card = new marriage.Card(suit, value);
			expect(card.toString()).toBe(suit + " " + value);
		});
	});
});